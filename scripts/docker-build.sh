#!/bin/bash

# Скрипт для сборки Docker образа Footura

echo "🐳 Сборка Docker образа для Footura..."

# Остановить dev сервер если запущен
echo "⏹️  Остановка dev сервера..."
pkill -f "next dev" 2>/dev/null || true
sleep 2

# Очистить предыдущие сборки
echo "🧹 Очистка предыдущих сборок..."
rm -rf .next
rm -rf out

# Сборка образа
echo "🔨 Сборка Docker образа..."
docker build -t footura-app:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker образ успешно собран!"
    echo "📦 Размер образа:"
    docker images footura-app:latest --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
else
    echo "❌ Ошибка при сборке Docker образа"
    exit 1
fi

echo "🚀 Для запуска используйте: ./scripts/docker-run.sh" 