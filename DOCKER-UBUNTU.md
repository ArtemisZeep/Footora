# 🐳 Docker Setup для Ubuntu 22.04

## Установка Docker на Ubuntu 22.04

### Шаг 1: Обновление системы
```bash
sudo apt update
sudo apt upgrade -y
```

### Шаг 2: Установка необходимых пакетов
```bash
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

### Шаг 3: Добавление официального GPG ключа Docker
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### Шаг 4: Добавление репозитория Docker
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Шаг 5: Установка Docker Engine
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### Шаг 6: Добавление пользователя в группу docker
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Шаг 7: Проверка установки
```bash
docker --version
docker compose version
docker run hello-world
```

## Установка Docker Compose (legacy)
Если нужна отдельная установка docker-compose:
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## Настройка автозапуска
```bash
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl status docker
```

## Деплой приложения Footura

### Вариант 1: Быстрый деплой
```bash
# Клонирование репозитория
git clone <your-repo-url>
cd my-app

# Сборка и запуск
docker compose up --build -d
```

### Вариант 2: Пошаговый деплой
```bash
# 1. Сборка образа
./scripts/docker-build.sh

# 2. Запуск контейнера
./scripts/docker-run.sh

# 3. Проверка
curl http://localhost:3000
```

### Вариант 3: Production с Nginx
```bash
# Запуск с nginx reverse proxy
docker compose --profile production up -d
```

## Управление контейнерами

### Основные команды
```bash
# Просмотр запущенных контейнеров
docker ps

# Логи приложения
docker compose logs -f footura-app

# Остановка
docker compose down

# Перезапуск
docker compose restart

# Обновление
docker compose pull
docker compose up --build -d
```

### Мониторинг
```bash
# Использование ресурсов
docker stats

# Логи системы
journalctl -u docker.service

# Дисковое пространство
docker system df
```

## Настройка Nginx (опционально)

### Установка Nginx на хосте
```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Конфигурация для Footura
```bash
sudo nano /etc/nginx/sites-available/footura
```

```nginx
server {
    listen 80;
    server_name footura.cz www.footura.cz;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/footura /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL с Let's Encrypt

### Установка Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Получение сертификата
```bash
sudo certbot --nginx -d footura.cz -d www.footura.cz
```

### Автообновление
```bash
sudo crontab -e
# Добавить строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## Firewall настройки
```bash
# Установка UFW
sudo apt install -y ufw

# Базовые правила
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Разрешить SSH, HTTP, HTTPS
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443

# Включить firewall
sudo ufw enable
sudo ufw status
```

## Мониторинг и логи

### Системные логи
```bash
# Docker логи
sudo journalctl -u docker.service -f

# Nginx логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Системные ресурсы
htop
df -h
free -h
```

### Автоматическое обновление
```bash
# Создать скрипт обновления
sudo nano /opt/update-footura.sh
```

```bash
#!/bin/bash
cd /path/to/your/app
git pull
docker compose down
docker compose up --build -d
docker system prune -f
```

```bash
sudo chmod +x /opt/update-footura.sh

# Добавить в cron для автообновления (опционально)
sudo crontab -e
# Добавить: 0 3 * * 0 /opt/update-footura.sh
```

## Backup стратегия
```bash
# Создание backup скрипта
sudo nano /opt/backup-footura.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/opt/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Создать директорию для бэкапов
mkdir -p $BACKUP_DIR

# Backup Docker volumes (если есть)
docker run --rm -v footura_data:/data -v $BACKUP_DIR:/backup alpine tar czf /backup/footura_data_$DATE.tar.gz -C /data .

# Backup конфигураций
cp -r /path/to/your/app $BACKUP_DIR/app_$DATE

# Удалить старые бэкапы (старше 30 дней)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
```

## Troubleshooting

### Docker не запускается
```bash
sudo systemctl status docker
sudo journalctl -u docker.service
sudo systemctl restart docker
```

### Проблемы с правами
```bash
sudo chown -R $USER:$USER /path/to/your/app
sudo chmod +x scripts/*.sh
```

### Очистка системы
```bash
# Удаление неиспользуемых образов
docker system prune -af

# Удаление volumes
docker volume prune -f

# Полная очистка
docker system prune -af --volumes
```

### Проблемы с портами
```bash
# Проверка занятых портов
sudo netstat -tlnp | grep :3000
sudo lsof -i :3000

# Освобождение порта
sudo kill -9 $(sudo lsof -t -i:3000)
```

## Производительность

### Оптимизация Docker
```bash
# Настройка Docker daemon
sudo nano /etc/docker/daemon.json
```

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "storage-driver": "overlay2"
}
```

### Мониторинг ресурсов
```bash
# Установка monitoring tools
sudo apt install -y htop iotop nethogs

# Мониторинг Docker
docker stats --no-stream
```

## Безопасность

### Обновления безопасности
```bash
# Автоматические обновления безопасности
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### Hardening
```bash
# Отключить root login по SSH
sudo nano /etc/ssh/sshd_config
# PermitRootLogin no

# Настроить fail2ban
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
``` 