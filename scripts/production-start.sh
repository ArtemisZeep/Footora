#!/bin/bash

# Скрипт для запуска production сервера

echo "🚀 Запуск Footura в production режиме..."

# Проверить что сборка существует
if [ ! -d ".next" ]; then
    echo "❌ Сборка не найдена. Запустите сначала:"
    echo "  ./scripts/production-build.sh"
    exit 1
fi

# Остановить существующие процессы
echo "⏹️  Остановка существующих процессов..."
pkill -f "next start" 2>/dev/null || true
pkill -f "node server.js" 2>/dev/null || true
sleep 2

# Установить production переменные
export NODE_ENV=production
export PORT=3000
export HOSTNAME=0.0.0.0

echo "🌐 Запуск сервера на порту 3000..."

# Запуск сервера
npm start &
SERVER_PID=$!

# Дождаться запуска сервера
echo "⏳ Ожидание запуска сервера..."
sleep 5

# Проверить что сервер запустился
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Сервер успешно запущен!"
    echo "🌐 Приложение доступно по адресу: http://localhost:3000"
    echo "📊 PID процесса: $SERVER_PID"
    
    echo ""
    echo "📝 Полезные команды:"
    echo "  Остановить:     kill $SERVER_PID"
    echo "  Логи:           tail -f nohup.out"
    echo "  Статус:         ps aux | grep next"
    
    echo ""
    echo "🔍 Для остановки используйте Ctrl+C или:"
    echo "  pkill -f 'next start'"
    
    # Показать процесс
    echo ""
    echo "📊 Запущенные процессы:"
    ps aux | grep -E "(next|node)" | grep -v grep
    
    # Ждать завершения
    wait $SERVER_PID
else
    echo "❌ Ошибка запуска сервера"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi 