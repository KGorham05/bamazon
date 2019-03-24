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

const displayProducts = (res) => {
    for (var i in res) {
        console.log("Item #: " + res[i].item_id +
            " Product: " + res[i].product_name +
            " Price: " + res[i].price)
    }
}


// connect to the mysql server and sql database
connection.connect(err => {
    if (err) throw err;
    start();
});

const start = () => {
    // Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        displayProducts(res);

        // The app should then prompt users with two messages.
        inquirer
            .prompt([
                {
                    // The first should ask them the ID of the product they would like to buy.
                    name: "itemChoice",
                    type: "input",
                    message: "Input the ID of the item you'd like to buy"
                }, {
                    // The second message should ask how many units of the product they would like to buy.
                    name: "quantity",
                    type: "input",
                    message: "How many units would you like to order?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ]).then(function (data) {

                let itemId = data.itemChoice;
                let quantity = data.quantity;
                // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
                if (res[itemId - 1].stock_quantity < quantity) {
                    // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through. 
                    console.log("\nInsufficient quantity! Your order will not go through!\n");
                    start();
                } else {
                    console.log("that should work!")
                    // However, if your store does have enough of the product, you should fulfill the customer's order.
                    // This means updating the SQL database to reflect the remaining quantity.
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: (res[itemId - 1].stock_quantity - quantity)
                        },
                        {
                            item_id: itemId
                        }
                    ], (err, response) => {
                        if (err) throw err;
                        // Once the update goes through, show the customer the total cost of their purchase.
                        console.log(`The total cost of your purchase is $ ${(res[itemId-1].price * quantity).toFixed(2)} `);
                        start();
                    })
                }
            });
    });
}














