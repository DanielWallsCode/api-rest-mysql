CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id) 
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1,'Daniel',1000),
    (2,'Joe',2000),
    (3,'Henry',2500),
    (4,'Max',1500);

SELECT * FROM empleados WHERE id