# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy build jar from build context to container
COPY build/libs/beka_potentialist-1.0.0.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
