DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  product_sales INT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE departments (
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(100) NOT NULL,
over_head_costs INT,
PRIMARY KEY (department_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 	("The Experience Tube", "entertainment", 24.99, 1000), 
		    ("Batman Snuggie", "home", 14.99, 500), 
        ("Emergency Clown Nose", "apparel", 10.74, 10), 
        ("Crazy Cat Lady Action Figure", "toys", 14.50, 250),
        ("The Zombie Survival Guide", "books", 10.77, 100),
        ("Unicorn Meat", "food", "24.99", 400), 
        ("Evolving Tadpole", "animals", 9.99, 120),
        ("Blinker Fluid", "automotive", 4.99, 200),
        ("Inflatable Turkey", "toys", 10.99, 800),
        ("Edible Insects", "food", 1.99, 200000);

SELECT * FROM products;