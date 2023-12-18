
CREATE DATABASE test;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password) VALUES ('Test user 1', 'test@testmail.com', '12345');
INSERT INTO users (name, email, password) VALUES ('Test user 2','test2@testmail.com', '12345');