# 🐳 Docker Setup для Footura

## Быстрый старт

### Вариант 1: Docker Compose (рекомендуется)
```bash
# Запуск приложения
./scripts/docker-compose-up.sh

# Или вручную
docker-compose up --build -d
```

### Вариант 2: Docker напрямую
```bash
# Сборка образа
./scripts/docker-build.sh

# Запуск контейнера
./scripts/docker-run.sh
```

## 📋 Требования

- Docker 20.0+
- Docker Compose 2.0+
- Минимум 2GB RAM
- Минимум 1GB свободного места

## 🚀 Команды

### Основные команды
```bash
# Сборка и запуск
docker-compose up --build -d

# Остановка
docker-compose down

# Просмотр логов
docker-compose logs -f footura-app

# Статус контейнеров
docker-compose ps
```

### Полезные команды
```bash
# Войти в контейнер
docker exec -it footura-container sh

# Очистка неиспользуемых образов
docker system prune -f

# Пересборка без кэша
docker-compose build --no-cache

# Перезапуск только приложения
docker-compose restart footura-app
```

## 🏗️ Архитектура

### Multi-stage Dockerfile
1. **deps** - Установка зависимостей
2. **builder** - Сборка приложения
3. **runner** - Production образ

### Оптимизации
- ✅ Alpine Linux (минимальный размер)
- ✅ Multi-stage build
- ✅ Non-root user
- ✅ Standalone output
- ✅ Оптимизированные слои

## 🌐 Порты

- **3000** - Next.js приложение
- **80** - HTTP (nginx, опционально)
- **443** - HTTPS (nginx, опционально)

## 📊 Мониторинг

### Health Check
```bash
# Проверка здоровья контейнера
docker inspect footura-container | grep -A 5 "Health"
```

### Логи
```bash
# Все логи
docker-compose logs

# Только ошибки
docker-compose logs | grep ERROR

# Последние 100 строк
docker-compose logs --tail=100
```

## 🔧 Конфигурация

### Переменные окружения
```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - HOSTNAME=0.0.0.0
```

### Volumes (опционально)
```yaml
volumes:
  - ./uploads:/app/uploads  # Для загрузок файлов
  - ./logs:/app/logs        # Для логов
```

## 🚀 Production Deployment

### С Nginx (рекомендуется)
```bash
# Запуск с nginx reverse proxy
docker-compose --profile production up -d
```

### Без Nginx
```bash
# Только Next.js приложение
docker-compose up -d footura-app
```

## 🐛 Troubleshooting

### Проблемы со сборкой
```bash
# Очистка кэша
docker builder prune -f

# Сборка без кэша
docker build --no-cache -t footura-app:latest .
```

### Проблемы с запуском
```bash
# Проверка логов
docker logs footura-container

# Проверка портов
docker port footura-container

# Проверка процессов
docker exec footura-container ps aux
```

### Проблемы с памятью
```bash
# Ограничение памяти
docker run -m 1g footura-app:latest

# Мониторинг ресурсов
docker stats footura-container
```

## 📈 Производительность

### Размер образа
- **Base**: ~150MB (Alpine + Node.js)
- **Final**: ~200-300MB (с приложением)

### Время сборки
- **Первая сборка**: 3-5 минут
- **Последующие**: 1-2 минуты (кэш)

### Использование ресурсов
- **RAM**: ~100-200MB
- **CPU**: Минимальное в idle

## 🔐 Безопасность

- ✅ Non-root пользователь
- ✅ Минимальный base образ
- ✅ Только необходимые пакеты
- ✅ Security headers в nginx
- ✅ SSL/TLS поддержка

## 📝 Примеры использования

### Development
```bash
# Быстрый запуск для разработки
docker-compose up --build
```

### Staging
```bash
# Запуск с логами
docker-compose up --build -d
docker-compose logs -f
```

### Production
```bash
# Полный стек с nginx
docker-compose --profile production up -d
``` 