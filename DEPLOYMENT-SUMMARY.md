# 🚀 Footura - Готовность к деплою

## ✅ Что готово

### 🐳 Docker контейнеризация
- ✅ **Dockerfile** - многоэтапная сборка с Alpine Linux
- ✅ **docker-compose.yml** - для разработки 
- ✅ **docker-compose.prod.yml** - для production
- ✅ **nginx.prod.conf** - production конфигурация nginx
- ✅ **.dockerignore** - исключения для Docker

### 📋 Скрипты автоматизации
- ✅ **scripts/docker-build.sh** - сборка Docker образа
- ✅ **scripts/docker-run.sh** - запуск контейнера
- ✅ **scripts/docker-compose-up.sh** - запуск через compose
- ✅ **scripts/deploy-ubuntu.sh** - полный деплой на Ubuntu
- ✅ **scripts/production-build.sh** - сборка без Docker
- ✅ **scripts/production-start.sh** - запуск без Docker

### 📚 Документация
- ✅ **DOCKER.md** - общая документация по Docker
- ✅ **DOCKER-UBUNTU.md** - полная инструкция для Ubuntu 22.04
- ✅ **DOCKER-INSTALL.md** - установка Docker на macOS

### 🔧 Конфигурация
- ✅ **next.config.js** - standalone output, оптимизация
- ✅ Отключены строгие проверки для production сборки
- ✅ Настроены ограничения ресурсов
- ✅ Health checks для контейнеров
- ✅ Логирование и мониторинг

## 🚀 Быстрый старт на Ubuntu 22.04

### 1. Установка Docker
```bash
# Следуйте инструкциям в DOCKER-UBUNTU.md
sudo apt update
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Деплой приложения
```bash
# Клонировать репозиторий
git clone <your-repo>
cd my-app

# Запустить автоматический деплой
./scripts/deploy-ubuntu.sh
```

### 3. Проверка
```bash
# Проверить статус
docker compose -f docker-compose.prod.yml ps

# Открыть в браузере
curl http://localhost:3000  # Прямое подключение
curl http://localhost       # Через nginx
```

## 🌐 Production URLs

- **HTTP**: http://footura.cz
- **HTTPS**: https://footura.cz  
- **Прямое**: http://server-ip:3000

## 📊 Архитектура

```
Internet → Nginx (80/443) → Next.js App (3000)
```

### Компоненты
- **Next.js 15.3.5** - основное приложение
- **Nginx** - reverse proxy, SSL, кэширование
- **Docker** - контейнеризация
- **Ubuntu 22.04** - операционная система

### Ресурсы
- **RAM**: 1GB лимит (256MB резерв) для приложения
- **CPU**: 1.0 лимит (0.25 резерв) для приложения
- **Диск**: ~300MB образ + логи

## 🔐 Безопасность

- ✅ Non-root пользователь в контейнере
- ✅ Security headers в nginx
- ✅ Rate limiting для API
- ✅ SSL/TLS поддержка
- ✅ Firewall настройки
- ✅ Автоматические обновления безопасности

## 📈 Мониторинг

### Health Checks
```bash
# Статус контейнеров
docker compose -f docker-compose.prod.yml ps

# Использование ресурсов
docker stats

# Логи
docker compose -f docker-compose.prod.yml logs -f
```

### Логи
- **Приложение**: Docker logs
- **Nginx**: `/var/log/nginx/`
- **Система**: `journalctl -u docker.service`

## 🔧 Управление

### Основные команды
```bash
# Запуск
./scripts/deploy-ubuntu.sh

# Остановка
docker compose -f docker-compose.prod.yml down

# Перезапуск
docker compose -f docker-compose.prod.yml restart

# Обновление
git pull
docker compose -f docker-compose.prod.yml up --build -d
```

### Backup
```bash
# Создать backup
docker compose -f docker-compose.prod.yml down
tar -czf footura-backup-$(date +%Y%m%d).tar.gz .
```

## 📝 Чеклист перед production

### Обязательно
- [ ] Настроить домен footura.cz на сервер
- [ ] Установить Let's Encrypt SSL сертификаты
- [ ] Настроить firewall (ufw allow 80,443)
- [ ] Настроить автоматические обновления
- [ ] Проверить Google Analytics и Yandex Metrika

### Рекомендуется  
- [ ] Настроить мониторинг (Prometheus/Grafana)
- [ ] Настроить backup стратегию
- [ ] Настроить логирование в внешний сервис
- [ ] Настроить алерты при падении сервиса
- [ ] Протестировать восстановление после сбоя

## 🆘 Troubleshooting

### Приложение не запускается
```bash
# Проверить логи
docker compose -f docker-compose.prod.yml logs footura-app

# Проверить порты
sudo netstat -tlnp | grep :3000

# Перезапустить
docker compose -f docker-compose.prod.yml restart
```

### Nginx не работает
```bash
# Проверить конфигурацию
docker compose -f docker-compose.prod.yml exec nginx nginx -t

# Проверить SSL сертификаты
ls -la ssl/

# Проверить логи
docker compose -f docker-compose.prod.yml logs nginx
```

### Проблемы с памятью
```bash
# Мониторинг ресурсов
docker stats

# Увеличить лимиты в docker-compose.prod.yml
# memory: 2G
```

## 📞 Поддержка

- **Docker**: https://docs.docker.com/
- **Next.js**: https://nextjs.org/docs
- **Nginx**: https://nginx.org/en/docs/
- **Ubuntu**: https://ubuntu.com/server/docs

## 🎯 Итог

✅ **Проект полностью готов к деплою на Ubuntu 22.04**

Все необходимые файлы созданы, скрипты настроены, документация написана. 
Для запуска достаточно выполнить `./scripts/deploy-ubuntu.sh` на сервере с установленным Docker. 