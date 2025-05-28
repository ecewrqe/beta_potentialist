# BekaPotentialist

BekaPotentialist is a Spring Boot application designed for potentially linguistic studying or managing other affairs. It uses PostgreSQL as its database backend and provides a REST API for interaction.

## Features

- Spring Boot backend
- RESTful API (see `/api/hello` endpoint for a sample)
- PostgreSQL integration
- Ready for extension for linguistic or other study/management purposes

## Getting Started

### Prerequisites

- Java 21 or later
- PostgreSQL
- Gradle (or use the included `gradlew` wrapper)

### Database Setup

1. Start PostgreSQL server.
2. Create the user and database:

   ```sh
   psql -U postgres
   CREATE USER myuser WITH PASSWORD 'mypassword';
   CREATE DATABASE beka_potentialist;
   GRANT ALL PRIVILEGES ON DATABASE beka_potentialist TO myuser;
   \q
   ```

### Build & Run

```sh
./gradlew bootRun
```

The application will start on [http://localhost:8080](http://localhost:8080).

### Example Endpoint

- `GET /api/hello` — returns a greeting message.

## Project Structure

- `src/main/java/com/euewrqe/beka_potentialist/` — Main application code
- `src/main/java/com/euewrqe/beka_potentialist/controller/HelloController.java` — Example REST controller
- `src/main/resources/application.properties` — Application configuration

## License

MIT
