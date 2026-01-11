CREATE TABLE games(
  id SERIAL PRIMARY KEY,
  title  VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  developer VARCHAR(255),
  platform VARCHAR(255) NOT NULL
);