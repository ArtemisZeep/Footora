#!/bin/bash

# Скрипт для запуска через Docker Compose

echo "🐳 Запуск Footura через Docker Compose..."

# Остановить dev сервер если запущен
echo "⏹️  Остановка dev сервера..."
pkill -f "next dev" 2>/dev/null || true
sleep 2

# Остановить предыдущие контейнеры
echo "⏹️  Остановка предыдущих контейнеров..."
docker-compose down

# Сборка и запуск
echo "🔨 Сборка и запуск контейнеров..."
docker-compose up --build -d

if [ $? -eq 0 ]; then
    echo "✅ Контейнеры успешно запущены!"
    echo "🌐 Приложение доступно по адресу: http://localhost:3000"
    echo "📊 Статус контейнеров:"
    docker-compose ps
    
    echo ""
    echo "📝 Полезные команды:"
    echo "  Логи:           docker-compose logs -f"
    echo "  Остановить:     docker-compose down"
    echo "  Перезапуск:     docker-compose restart"
    echo "  Статус:         docker-compose ps"
    
    # Показать логи последние 20 строк
    echo ""
    echo "📄 Последние логи:"
    docker-compose logs --tail=20 footura-app
else
    echo "❌ Ошибка при запуске контейнеров"
    exit 1
fi 