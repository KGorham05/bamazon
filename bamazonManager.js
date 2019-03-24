const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information to sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

function viewProducts() {
    console.log("Displaying all products...\n");
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (var i in res) {
            console.log("Item #: " + res[i].item_id +
                " Product: " + res[i].product_name +
                " Price: " + res[i].price +
                " Quantity: " + res[i].stock_quantity)
        }
        connection.end();
    });
};

function viewLowInventory() {
    console.log("Displaying low inventory...\n");
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        for (var i in res) {
            if (res[i].stock_quantity < 5) {
                console.log("Product: " + res[i].product_name +
                    "Quantity: " + res[i].stock_quantity)
            }
        }
        connection.end();
    })
};


function addNewProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products SET ?",
        {
            flavor: "Rocky Road",
            price: 3.0,
            quantity: 50
        },
        (err, res) => {
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            updateProduct();
        }
    );
};

function addToInventory() {
    console.log("Addint to inventory\n");
    // If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store
    inquirer.prompt([
        {
            type: "rawlist",
            name: "item",
            message: "What item would you like to add more of?",
            choices: itemArr
        },
        {
            type: "input",
            name: "number",
            message: "How many would you like to add to inventory?"
        }
    ]).then((data) => {
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: (stock_quantity + data.number )
                },
                {
                    product_name: data.item
                }
            ],
            (err, res) => {
                console.log(res.affectedRows + " products updated!\n");
            }
        )
    });
}

connection.connect(err => {
    if (err) throw err;
    start();
});
// Running this application will:
const start = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then((data) => {
        console.log(data);
        console.log(data.userChoice);
        // If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
        if (data.userChoice === "View Products for Sale") {
            viewProducts();
        } else if (data.userChoice === "View Low Inventory") {
            viewLowInventory();
            // If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
        } else if (data.userChoice === "Add to Inventory") {
            addToInventory();
        } else {
            // If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
        }





    })
}




