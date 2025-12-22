# Лаба бэкенд - фронт

## Сборка через Docker

- Установить Docker и запустить службу Docker
- Порт **8080** на хосте должен быть свободен
- Выполнить команды:

```bash
sudo docker build -t rmss-lab .
sudo docker run -it -p 8080:8080 rmss-lab
```

## Проверка:
- Открыть браузер на http://localhost:8080/ (должен загрузиться html и js)
- получить пользователей: GET /api/users
- посмотреть пользователя с id GET /api/users/id

