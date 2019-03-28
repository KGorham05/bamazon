DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_id VARCHAR(30),
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

INSERT INTO departments (department_name, over_head_costs) 
VALUES ("entertainment", 1000), ("home", 5000), ("apparel", 3000), ("toys", 1500), ("books", 2000), ("food", 2000), ("animals", 10000), ("automotive", 4500);

INSERT INTO products (product_name, department_id, price, stock_quantity)
VALUES 	("The Experience Tube", 1, 24.99, 1000), 
		    ("Batman Snuggie", 2, 14.99, 500), 
        ("Emergency Clown Nose", 3, 10.74, 10), 
        ("Crazy Cat Lady Action Figure", 4, 14.50, 250),
        ("The Zombie Survival Guide", 5, 10.77, 100),
        ("Unicorn Meat", 6, "24.99", 400), 
        ("Evolving Tadpole", 7, 9.99, 120),
        ("Blinker Fluid", 8, 4.99, 200),
        ("Inflatable Turkey", 4, 10.99, 800),
        ("Edible Insects", 6, 1.99, 200000);

SELECT * FROM products;
SELECT * FROM departments;

SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS 'Product Sales', (SUM(products.product_sales) - departments.over_head_costs) AS  'Total Profit' 
FROM departments
LEFT JOIN products ON products.department_id=departments.department_id
GROUP BY departments.department_name, departments.department_id, departments.over_head_costs
ORDER BY departments.department_id ASC;
                        
INNER JOIN products ON products.department_name =