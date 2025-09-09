#!/bin/bash

# Скрипт для деплоя Footura на Ubuntu 22.04

set -e  # Остановить при любой ошибке

echo "🚀 Деплой Footura на Ubuntu 22.04..."

# Проверить что Docker установлен
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Запустите сначала:"
    echo "   См. DOCKER-UBUNTU.md для инструкций по установке"
    exit 1
fi

# Проверить что Docker Compose доступен
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose не найден"
    exit 1
fi

# Остановить существующие контейнеры
echo "⏹️  Остановка существующих контейнеров..."
docker compose -f docker-compose.prod.yml down 2>/dev/null || true

# Очистка старых образов
echo "🧹 Очистка старых образов..."
docker system prune -f

# Создать необходимые директории
echo "📁 Создание директорий..."
mkdir -p ssl
mkdir -p logs
mkdir -p uploads

# Проверить SSL сертификаты
if [ ! -f "ssl/footura.cz.crt" ] || [ ! -f "ssl/footura.cz.key" ]; then
    echo "⚠️  SSL сертификаты не найдены в директории ssl/"
    echo "   Для production необходимы SSL сертификаты"
    echo "   См. DOCKER-UBUNTU.md для настройки Let's Encrypt"
    
    # Создать самоподписанные сертификаты для тестирования
    echo "🔒 Создание самоподписанных сертификатов для тестирования..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ssl/footura.cz.key \
        -out ssl/footura.cz.crt \
        -subj "/C=CZ/ST=Prague/L=Prague/O=Footura/CN=footura.cz"
    
    echo "⚠️  ВНИМАНИЕ: Используются самоподписанные сертификаты!"
    echo "   Для production установите Let's Encrypt сертификаты"
fi

# Сборка и запуск
echo "🔨 Сборка и запуск контейнеров..."
docker compose -f docker-compose.prod.yml up --build -d

# Ожидание запуска
echo "⏳ Ожидание запуска сервисов..."
sleep 10

# Проверка статуса
echo "📊 Проверка статуса контейнеров..."
docker compose -f docker-compose.prod.yml ps

# Проверка здоровья приложения
echo "🔍 Проверка здоровья приложения..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Приложение запущено успешно!"
else
    echo "❌ Приложение не отвечает"
    echo "📄 Логи приложения:"
    docker compose -f docker-compose.prod.yml logs --tail=20 footura-app
    exit 1
fi

# Проверка nginx (если запущен)
if docker compose -f docker-compose.prod.yml ps nginx | grep -q "Up"; then
    echo "🔍 Проверка nginx..."
    if curl -f http://localhost > /dev/null 2>&1; then
        echo "✅ Nginx работает!"
    else
        echo "⚠️  Nginx не отвечает"
        echo "📄 Логи nginx:"
        docker compose -f docker-compose.prod.yml logs --tail=10 nginx
    fi
fi

echo ""
echo "🎉 Деплой завершен!"
echo "🌐 Приложение доступно по адресам:"
echo "   HTTP:  http://localhost:3000 (прямое подключение)"
echo "   HTTP:  http://localhost (через nginx)"
echo "   HTTPS: https://localhost (через nginx с SSL)"

echo ""
echo "📝 Полезные команды:"
echo "   Логи:           docker compose -f docker-compose.prod.yml logs -f"
echo "   Остановка:      docker compose -f docker-compose.prod.yml down"
echo "   Перезапуск:     docker compose -f docker-compose.prod.yml restart"
echo "   Статус:         docker compose -f docker-compose.prod.yml ps"
echo "   Мониторинг:     docker stats"

echo ""
echo "🔧 Следующие шаги:"
echo "1. Настройте домен footura.cz на ваш сервер"
echo "2. Установите Let's Encrypt сертификаты (см. DOCKER-UBUNTU.md)"
echo "3. Настройте firewall (ufw allow 80,443)"
echo "4. Настройте автоматические обновления"

echo ""
echo "📄 Логи последних 10 строк:"
docker compose -f docker-compose.prod.yml logs --tail=10 