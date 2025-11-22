-- creating table 
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    year INT NOT NULL,
    course VARCHAR(10) NOT NULL,
    attend BOOLEAN DEFAULT TRUE
    -- // something to write up 
  
);
