-- DROP DATABASE cheweats_restaurants;
CREATE DATABASE cheweats_restaurants;
USE cheweats_restaurants;

CREATE TABLE restaurants (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  shared_rate_per_mile DECIMAL(4,2)
);

INSERT INTO restaurants (name, shared_rate_per_mile) 
VALUES
("Mickey B's", 1.25),
("Mendy's", 1),
("Burger Ring", 1),
("Pizza Lane", 1.5),
("Sushi Paradise", 2);

Select * from restaurants;

CREATE TABLE current_market (
  id integer PRIMARY KEY AUTO_INCREMENT,
  city_name VARCHAR(20) NOT NULL,
  minimum_pay_rate_for_two_miles DECIMAL(4,2)
);

INSERT INTO current_market (city_name, minimum_pay_rate_for_two_miles)
VALUES
("Westview", 6.5),
("Salem", 7);

CREATE TABLE customers (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  shared_rate_per_mile DECIMAL(4,2)
);

INSERT INTO customers (name, shared_rate_per_mile)
VALUES
("Agatha", 1),
("Teen", 3),
("Rio", 2),
("Lilia", 2),
("Jen", 3.5),
("Alice", 1.5);
