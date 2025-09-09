#!/bin/bash

# Скрипт для production сборки без Docker

echo "🚀 Production сборка Footura (без Docker)..."

# Остановить dev сервер если запущен
echo "⏹️  Остановка dev сервера..."
pkill -f "next dev" 2>/dev/null || true
sleep 2

# Очистить предыдущие сборки
echo "🧹 Очистка предыдущих сборок..."
rm -rf .next
rm -rf out

# Установить зависимости если нужно
echo "📦 Проверка зависимостей..."
if [ ! -d "node_modules" ]; then
    echo "📥 Установка зависимостей..."
    npm ci
fi

# Production сборка
echo "🔨 Сборка приложения..."
NODE_ENV=production npm run build

if [ $? -eq 0 ]; then
    echo "✅ Сборка успешно завершена!"
    echo "📊 Статистика сборки:"
    du -sh .next
    
    echo ""
    echo "🚀 Для запуска используйте:"
    echo "  npm start"
    echo "  или"
    echo "  ./scripts/production-start.sh"
    
    echo ""
    echo "📝 Production файлы:"
    ls -la .next/
else
    echo "❌ Ошибка при сборке"
    exit 1
fi 