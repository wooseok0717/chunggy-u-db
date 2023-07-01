DROP DATABASE IF EXISTS chunggyusers;
CREATE DATABASE chunggyusers;

\c chunggyusers;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT,
  email TEXT,
  class TEXT,
  role TEXT
);

CREATE index user_id_idx on users(id);
CREATE index user_email_idx on users(email);

INSERT INTO users (name, email, class, role) VALUES ('chunggy', 'wjang717@gmail.com', 'assasin', 'owner');