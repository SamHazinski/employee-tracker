const inquirer = require('inquirer');
const { Pool } = require('pg');


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


async function allDepts(){
    const query = "SELECT * FROM departments";
    const result = await pool.query(query);
    console.table(result.rows);
}
async function allRoles(){
    const query = "SELECT * FROM roles";
    const result = await pool.query(query);
    console.table(result.rows);
}
async function allEmployees(){
    const query = "SELECT * FROM employees";
    const result = await pool.query(query);
    console.table(result.rows);
}
const department_name = {
    type: "input",
    name: "department",
    message: "What is the name of the department?"
}
async function insertDept(answers) {
    const query = "INSERT INTO departments (department_name) VALUES ($1)"
    const result = await pool.query(query, [answers]);
    console.table(result.rows);
}
async function addDept(){
    inquirer.prompt(department_name)
    .then((answers) => {
        insertDept(answers.department)
    })
}
const role_name = [{
    type: "input",
    name: "role",
    message: "What is the title of the role?"
},{
    type: "input",
    name: "salary",
    message: "What is the salary of the role?"
},{
    type: "input",
    name: "departmentID",
    message: "What is the department ID of the role?"
}
]
async function insertRole(answers1, answers2, answers3) {
    const query = "INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)"
    const result = await pool.query(query, [answers1, answers2, answers3]);
    console.table(result.rows);
}
async function addRole(){
    inquirer.prompt(role_name)
    .then((answers) => {
        insertRole(answers.role, answers.salary, answers.departmentID)
    })
}
const newEmp = [{
    type: "input",
    name: "first",
    message: "What is their first name?"
},{
    type: "input",
    name: "last",
    message: "What is their last name?"
},{
    type: "input",
    name: "roleID",
    message: "What is their role ID"
},{
    type: "input",
    name: "manager",
    message: "What is their manager ID"
}
]
async function insertEmployee(answers1, answers2, answers3, answers4) {
    const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)"
    const result = await pool.query(query, [answers1, answers2, answers3, answers4]);
    console.table(result.rows);
}
async function addEmployee(){
    inquirer.prompt(newEmp)
    .then((answers) => {
        insertEmployee(answers.first, answers.last, answers.roleID, answers.manager)
    })
}


module.exports = {allDepts, allRoles, allEmployees, addDept, addRole, addEmployee,
    // updateRole
};