const express = require('express');
const inquirer = require('inquirer');
const { Pool } = require('pg');
const{allDepts, allRoles, allEmployees, addDept, addRole, addEmployee} = require('./functions')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
    {
      user: 'postgres',
      password: 'a3m94in5',
      host: 'localhost',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  )
  
  pool.connect();

  async function run() {
    while(1<2) {
        const {action} = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Choose an option",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add department",
            "Add role",
            "Add employee",
            "Update employee role"
        ]
    });

    switch (action){
        case "View all departments":
            await allDepts();
            break;

        case "View all roles":
            await allRoles();
            break;

        case "View all employees":
            await allEmployees();
            break;

        case "Add department":
            await addDept();
            break;    

        case "Add role":    
            await addRole();
            break; 

            case "Add employee":    
            await addEmployee();
            break; 
        
    }


  }}

  run();

  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  