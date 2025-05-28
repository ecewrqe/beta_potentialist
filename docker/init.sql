-- CREATE USER myuser WITH PASSWORD 'mypassword';
-- CREATE DATABASE beka_potentialist;
-- GRANT ALL PRIVILEGES ON DATABASE beka_potentialist TO myuser;

-- GRANT ALL PRIVILEGES ON DATABASE beka_potentialist TO myuser;
-- GRANT ALL ON SCHEMA public TO myuser;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO myuser;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
