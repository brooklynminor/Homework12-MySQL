# Homework12-MySQL

## Objective

Often, developers are required to create interfaces that make it easy for non-developers to view, interact and store information. These interfaces are known as Content Management Systems (CMS). The challenge for this assignment is to build a solution for managing a company's employees using node, inquirer, and MySQL.

## User Story

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

## Algorithms

A `schema.sql` is a collection of database objects associated with a database.  Schema always belong to a single database whereas a database can have single or multiple schemas. In this case the file is collecting database objects linked with the employee_DB database.
```
CREATE TABLE employee_department; (
```
```
CREATE TABLE employee_role; (
```
```
CREATE TABLE employee; (
```

The `seed.sql` file pre-populates the database. This made development of individual features easier.

A Comma Separated Values (CSV) file is a plain text file that contains a list of data. In this case the account connects to the MySQL database server and inserts privileges. A CSV file with data that matches with the number of columns of the table and the type of data in each column. _The .csv files are located within the db folder._

## Installation

Installation is done using the npm install from the terminal.
```
npm install mysql
```
Run `npm install` to run dependencies

## License
[License](https://choosealicense.com/licenses/mit)
