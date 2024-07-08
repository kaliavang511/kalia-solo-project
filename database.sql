-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- Create users table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL
);

-- Create Tribute table
CREATE TABLE "tribute" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id),
    First_Name VARCHAR(200),
    Middle_Name VARCHAR,
    Last_Name VARCHAR,
    obituary VARCHAR,
    image VARCHAR(300),
    video VARCHAR(300),
    Date_of_birth VARCHAR(20),
    Date_of_death VARCHAR(20)
);