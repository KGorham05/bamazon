# Bamazon Node & MySQL Application

Bamazon is an Amazon-like storefront built using Node and MySQL to practice working with servers and databases. You can order items in the bamazonCustomer application, manipulate items in the MySQL database with the bamazonManager application, and view sales data by department with the bamazonSupervisor application. 

## Technologies 

Technologies used in the creation of this application include: 

1. Javascript
2. MySQL
3. Node
    * NPM Packages
        * Inquirer
        * MySQL
4. Git

## Getting Started

### Test Bamazon on your own machine

In order to test any of the bamazon.js files, you'll need:

1. Node.js
2. MySQL Server and Workbench

### Using Bamazon

To use Bamazon, begin by opening your terminal and navigating to the folder where you cloned this repo. 
[![Image from Gyazo](https://i.gyazo.com/39ee841d2bedb605bce74693fabd1f77.png)](https://gyazo.com/39ee841d2bedb605bce74693fabd1f77)

### bamazonCustomer.js

Enter 'Node bamazonCustomer.js' into the terminal, and the user will be presented with a list of products they can order. 

[![Image from Gyazo](https://i.gyazo.com/700d725b1fbbd70f2385c16fca3be844.gif)](https://gyazo.com/700d725b1fbbd70f2385c16fca3be844)

To purchase one of these products the user inputs the item number into the terminal. Next, the user is prompted for the number of units they'd like to order. Lastly, the application confirms that there is enough of the item in inventory to fulfill the order and the order is processed. The application also displays the final cost of the purchase. 

### bamazonManager.js

The bamazonManager.js file promts the user with four choices. 

1. View Products for Sale
2. View Low Inventory
3. Add to Inventory
4. Add New Product

#### View Products for Sale

The view products for sale option displays the product names, prices, and quantity of each in the inventory. 

[![Image from Gyazo](https://i.gyazo.com/00f33ba636ca2f4fbafdfef1791d1eeb.gif)](https://gyazo.com/00f33ba636ca2f4fbafdfef1791d1eeb)

#### View Low Inventory

The view low inventory option displays all items with 5 or less of that item in inventory. 

[![Image from Gyazo](https://i.gyazo.com/329d556ba0655f68e2cdf94dd6a26e04.gif)](https://gyazo.com/329d556ba0655f68e2cdf94dd6a26e04)

#### Add to Inventory

Add to inventory allows a user to add more of any item to its existing inventory. The app then displays all items with their updated quantities. 

[![Image from Gyazo](https://i.gyazo.com/b66d621d9b3677c7dcd0e5be6c9e724b.gif)](https://gyazo.com/b66d621d9b3677c7dcd0e5be6c9e724b)

#### Add New Product

Add new product allows the user to add a new product to the database. The user is prompted to set the name of the product, the department that item belongs in, the price of the item, and lastly the quantity to add to inventory.  

[![Image from Gyazo](https://i.gyazo.com/4b467c39d978f2e35f26340ad57e27a6.gif)](https://gyazo.com/4b467c39d978f2e35f26340ad57e27a6)

### bamazonSupervisor.js

The bamazonSupervisor.js application prompts the user with two choices, "View product sales by department", and "Add new department". The options behave as you would expect. Calculations for product sales and total profit are calculated on the fly in the mySQL query.

[![Image from Gyazo](https://i.gyazo.com/2faa985d30c3bbf8776b1d73ab0e93fb.png)](https://gyazo.com/2faa985d30c3bbf8776b1d73ab0e93fb)

View product sales by department: 

[![Image from Gyazo](https://i.gyazo.com/69c95b0d710cf51aab8c8ae6738d3004.gif)](https://gyazo.com/69c95b0d710cf51aab8c8ae6738d3004)

Add new department: 

[![Image from Gyazo](https://i.gyazo.com/94665c8def4508b00ab061a03344ca08.gif)](https://gyazo.com/94665c8def4508b00ab061a03344ca08)

## More Info

The **github** for this project can be found here: [Github](https://github.com/KGorham05/bamazon)
___
This project was created and is maintained by **Kevin Gorham**.  

Contact me at <Kevin.Gorham@gmail.com>
