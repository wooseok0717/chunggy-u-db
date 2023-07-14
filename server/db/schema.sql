COPY users TO '/Users/wooseokjang/Desktop/chunggysimulator/chunggy-u-db/server/csv/users.csv'  DELIMITER ',' NULL AS 'null' CSV HEADER;

CREATE DATABASE josh;
\c josh;

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

COPY users
  FROM '/Users/wooseokjang/Desktop/chunggysimulator/chunggy-u-db/server/csv/users.csv'
  DELIMITER ',' NULL AS 'null' CSV HEADER;
ALTER SEQUENCE sets_id_seq RESTART WITH 100000000;