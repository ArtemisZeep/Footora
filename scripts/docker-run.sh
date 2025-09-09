#!/bin/bash

# Скрипт для запуска Docker контейнера Footura

echo "🚀 Запуск Docker контейнера Footura..."

# Остановить существующий контейнер если запущен
echo "⏹️  Остановка существующих контейнеров..."
docker stop footura-container 2>/dev/null || true
docker rm footura-container 2>/dev/null || true

# Запуск нового контейнера
echo "▶️  Запуск нового контейнера..."
docker run -d \
  --name footura-container \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  footura-app:latest

if [ $? -eq 0 ]; then
    echo "✅ Контейнер успешно запущен!"
    echo "🌐 Приложение доступно по адресу: http://localhost:3000"
    echo "📊 Статус контейнера:"
    docker ps --filter name=footura-container --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    
    echo ""
    echo "📝 Полезные команды:"
    echo "  Логи:           docker logs -f footura-container"
    echo "  Остановить:     docker stop footura-container"
    echo "  Статус:         docker ps"
    echo "  Войти в контейнер: docker exec -it footura-container sh"
else
    echo "❌ Ошибка при запуске контейнера"
    exit 1
fi 