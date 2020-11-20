DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employee_department; (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NULL,
);


CREATE TABLE employee_role; (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(1000000,2) NULL,
  department_id FIND employee_department id INT PRIMARY KEY AUTO_INCREMENT),
);

CREATE TABLE employee; (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,

);

