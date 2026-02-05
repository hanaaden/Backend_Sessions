-- DDL

-- creating database 

CREATE DATABASE ddl;


-- creating table 

CREATE TABLE DDL_table (id int , carName TEXT , phoneNumber INT);

-- dropping a table 

DROP TABLE DDL_table1;

--altering table 
ALTER TABLE DDL_table ADD COLUMN address VARCHAR(255);

--truncate table
TRUNCATE TABLE DDL_table1;


-- DML

-- inserting a table 

INSERT INTO DDL_table (id, carname, phonenumber, address)
VALUES (1, 'toyota', '345465474', 'New Hageisa');


-- updating the column 

UPDATE DDL_table SET carname = 'Nissan' where id=1;

-- deleting


