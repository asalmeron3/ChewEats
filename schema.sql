-- DROP DATABASE IF EXISTS cheweats;
CREATE DATABASE cheweats;
USE cheweats;

CREATE TABLE restaurants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  shared_rate_per_mile DECIMAL(4,2),
  lat int NOT NULL,
  lng int NOT NULL,
  min_revenue int NOT NULL
);

INSERT INTO restaurants (name, shared_rate_per_mile, lat, lng, min_revenue) 
VALUES
("Mickey B's", 1.25, 2, 2, 10),
("Mendy's", 1, 3, 2, 15),
("Burger Ring", 1, -1, 2, 5),
("Pizza Lane", 1.5, -3, -3, 7),
("Sushi Paradise", 2, 2, -4, 20);

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
  shared_rate_per_mile DECIMAL(4,2),
  lat int NOT NULL,
  lng int NOT NULL
);

INSERT INTO customers (name, shared_rate_per_mile, lat, lng)
VALUES
("Agatha", 1, 5, 5),
("Teen", 3, 3, 1),
("Rio", 2, -5, -5),
("Lilia", 2, -3, 2),
("Jen", 3.5, 4, 0),
("Alice", 1.5, -2, 4);

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