# Лаба бэкенд - фронт

## Сборка через Docker

- Установить Docker и запустить службу Docker
- Порт **8080** на хосте должен быть свободен
- Выполнить команды:

### без docker compose
```bash
sudo docker build -t rmss-lab .
sudo docker run -it -p 8080:8080 rmss-lab
```

### с докер compose
```bash
sudo docker compose up --build
```

## Проверка:
- Открыть браузер на http://localhost:8080/ (должен загрузиться html и js)
- получить пользователей: GET /api/users
- посмотреть пользователя с id GET /api/users/id

