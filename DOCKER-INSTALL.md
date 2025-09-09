# 🐳 Установка Docker для macOS

## Вариант 1: Docker Desktop (рекомендуется)

### Установка через Homebrew
```bash
# Установка Docker Desktop
brew install --cask docker

# Или скачать с официального сайта
# https://docs.docker.com/desktop/install/mac-install/
```

### Запуск Docker Desktop
1. Открыть Applications → Docker
2. Дождаться запуска Docker Engine
3. Проверить статус: `docker --version`

## Вариант 2: Colima + Docker CLI

### Установка
```bash
# Установка colima (легковесная альтернатива Docker Desktop)
brew install colima docker docker-compose

# Запуск colima
colima start

# Проверка
docker --version
```

## Вариант 3: OrbStack (современная альтернатива)

### Установка
```bash
# Установка OrbStack
brew install --cask orbstack

# Или скачать с сайта: https://orbstack.dev/
```

## Проверка установки

```bash
# Проверка Docker
docker --version
docker-compose --version

# Тестовый запуск
docker run hello-world

# Проверка системы
docker system info
```

## После установки

```bash
# Вернуться в папку проекта
cd /Users/artemiszeep/dev/BIA/my-app

# Сборка образа
./scripts/docker-build.sh

# Или через Docker Compose
./scripts/docker-compose-up.sh
```

## Альтернатива без Docker

Если Docker не нужен, можно использовать production сборку:

```bash
# Production сборка
npm run build

# Запуск production сервера
npm start
```

## Troubleshooting

### Docker Desktop не запускается
```bash
# Перезапуск Docker Desktop
killall Docker && open -a Docker

# Или через терминал
sudo launchctl stop com.docker.helper
sudo launchctl start com.docker.helper
```

### Colima проблемы
```bash
# Перезапуск colima
colima stop
colima start

# Проверка статуса
colima status
```

### Права доступа
```bash
# Добавить пользователя в группу docker (Linux)
sudo usermod -aG docker $USER

# На macOS обычно не требуется
``` 