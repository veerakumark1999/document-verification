# === Stage 1: Build the Spring Boot JAR ===
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# === Stage 2: Run the JAR ===
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/DodumentVerify-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
