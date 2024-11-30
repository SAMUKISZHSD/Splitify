CREATE DATABASE shared_expenses;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    owner_id INT REFERENCES users(id)
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    group_id INT REFERENCES groups(id),
    description VARCHAR(255),
    amount NUMERIC(10, 2),
    paid_by INT REFERENCES users(id),
    split_among JSON
);
