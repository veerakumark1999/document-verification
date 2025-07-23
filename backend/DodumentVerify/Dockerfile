# Use Java 17 base image
FROM eclipse-temurin:17-jdk

# Set working directory inside container
WORKDIR /app

# Copy your JAR file (match the name)
COPY target/DodumentVerify-0.0.1-SNAPSHOT.jar app.jar

# Expose the port Spring Boot uses
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
