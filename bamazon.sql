DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 	("the experience tube", "entertainment", 24.99, 1000), 
		    ("batman snuggie", "home", 14.99, 500), 
        ("emergency clown nose", "apparel", 10.74, 1), 
        ("crazy cat lady action figure", "toys", 14.50, 250),
        ("the zombie survival guide", "books", 10.77, 100),
        ("unicorn meat", "food", "24.99", 400), 
        ("evolving tadpole", "animals", 9.99, 120),
        ("blinker fluid", "automotive", 4.99, 200),
        ("inflatable turkey", "toys", 10.99, 800),
        ("edible insects", "food", 1.99, 200,000);

SELECT * FROM products;