# Лаба бэкенд - фронт

# Сборка
установить мавен, jvm с поддержкой java 21
выполнить:

mvn clean install
mvn spring-boot:run
# или так, если maven не установлен, но jvm все равно нужна
./mvnw clean install
./mvnw spring-boot:run

# Запуск:
порт 8080 должен быть свободный
Открыть браузер на http://localhost:8080/

получить пользователей:
GET /api/users
посмотреть пользователя с id
GET /api/users/id

