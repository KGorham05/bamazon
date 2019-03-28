const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

const viewSalesQuery = "SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS 'Product Sales', (SUM(products.product_sales) - departments.over_head_costs) AS  'Total Profit' FROM departments LEFT JOIN products ON products.department_id=departments.department_id GROUP BY departments.department_name, departments.department_id, departments.over_head_costs ORDER BY departments.department_id ASC;";


function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "command",
            message: "What would you like to do?",
            choices: ["View Product Sales by Department", "Create New Department", "Exit"]
        }
    ]).then((data) => {
        console.log(data.command);
        if (data.command === "View Product Sales by Department") {
            connection.query(viewSalesQuery, (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
            });
        } else if (data.command === "Create New Department") {
            inquirer.prompt([{
                name: "new_dept",
                message: "What is the Name of the new Department?",
                type: "input"
            }, {
                name: "new_overhead",
                message: "What is this departments overhead costs",
                type: "input"
            }]).then(function (answers) {
                connection.query(`INSERT INTO departments (department_name, over_head_costs) VALUES ("${answers.new_dept}", ${answers.new_overhead})`, (err, res) => {
                    if (err) throw err;
                    console.log("Department added successfully!")
                    start();
                });
            });
            
        } else {
            console.log("Come back soon!")
            connection.end();
        }
    })
}


// Hint: You may need to look into aliases in MySQL.

// Hint: You may need to look into GROUP BYs.

// Hint: You may need to look into JOINS.


connection.connect(err => {
    if (err) throw err;
    start();
});