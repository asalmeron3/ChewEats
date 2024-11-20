-- DROP DATABASE cheweats_restaurants;
CREATE DATABASE cheweats_restaurants;
USE cheweats_restaurants;

CREATE TABLE restaurants (
  id INT PRIMARY KEY AUTO_INCREMENT,
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
  id INT PRIMARY KEY AUTO_INCREMENT,
  city_name VARCHAR(20) NOT NULL,
  minimum_pay_rate_for_two_miles DECIMAL(4,2)
);

INSERT INTO current_market (city_name, minimum_pay_rate_for_two_miles)
VALUES
("Westview", 6.5),
("Salem", 7);

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
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

CREATE TABLE menu_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  price DECIMAL (5,2),
  restaurant_id INT,
  FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE 
);

INSERT INTO menu_items(name, price, restaurant_id)
VALUES
("Big Snack", 7.80, 1),
("Big Fries", 4.25, 1),
("Mave's Double", 8.99, 2),
("Frostique", 2.25, 2),
("Wobbler", 7.99, 3),
("Nugget", 0.40, 3),
("Lane's Special", 16, 4),
("Breadsticks", 4, 4),
("Regular Roll", 7, 5),
("Special Roll", 9, 5);