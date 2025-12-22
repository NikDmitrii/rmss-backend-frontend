FROM amazoncorretto:21-alpine
WORKDIR /app
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
COPY src ./src
RUN ./mvnw clean install -DskipTests
EXPOSE 8080
CMD ["./mvnw", "spring-boot:run"]
