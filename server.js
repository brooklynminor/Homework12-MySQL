const inquirer = require( 'inquirer' );
const db = require('./orm');
const mysql = require( 'mysql' );

    async function employeeDepartment(){
        // get new employee department
        const newEmployeeDepartment = await inquirer.prompt([
            { name: "id",    message: "What is the id of the employee?" },
            { name: "name",   message: "What is the name of the department?" },
        ]);

        const myDepartment = await db.query( 
            "INSERT INTO employee_department (id,title,salary,department_id) VALUES(?,?) ",
            [newEmployeeDepartment.id, newEmployeeDepartment.name] );
        console.log( `insert newEmployeeDepartment:`, myDepartment )
        
        const myEmployeeDepartment = await db.query( "SELECT * FROM employee_department" );
        for( let i=0; i<myEmployeeDepartment.length; i++ ){
            const employeeDepartment = myEmployeeDepartment[i];
            console.log( `${i}: ${employeeDepartment.id}, ${employeeDepartment.name} `)
        }
        // console.log( myEmployee );

        await db.close();
    }


    async function employeeRole(){
        // get new employee role
        const newEmployeeRole = await inquirer.prompt([
            { name: "id",    message: "What is the id of the employee?" },
            { name: "title",   message: "What is the title of the role?" },
            { name: "salary",    message: "What is the salary?" },
            { name: "department_id",   message: "What role is being reference within the department?" },
        ]);

        const myRole = await db.query( 
            "INSERT INTO employee_role (id,title,salary,department_id) VALUES(?,?,?,?) ",
            [newEmployeeRole.id, newEmployeeRole.title, newEmployeeRole.salary, newEmployeeRole.department_id] );
        console.log( `insert newEmployeeRole:`, myRole )
        
        const myEmployeeRole = await db.query( "SELECT * FROM employee_department" );
        for( let i=0; i<myEmployeeRole.length; i++ ){
            const employeeRole = myEmployeeRole[i];
            console.log( `${i}: ${employeeRole.id}, ${employeeRole.title}, ${employeeRole.salary}, ${employeeRole.department_id} `)
        }
        // console.log( myEmployee );

        await db.close();

    }

    async function employeeInfo(){
        // get new employee info
        const employee = await inquirer.prompt([
            { name: "id",    message: "What is the id of the employee?" },
            { name: "first_name",   message: "What is the first name of the employee" },
            { name: "last_name",    message: "What is the last name of the employee?" },
            { name: "role_id",   message: "What is their role within the department?" },
            { name: "manager_id",   message: "What is the name of their manager" },
    
        ]);

        const myNewEmployee = await db.query( 
            "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(?,?,?,?,?) ",
            [employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id] );
        console.log( `insert employee:`, myNewEmployee )
        
        const myEmployee = await db.query( "SELECT * FROM employee" );
        for( let i=0; i<myEmployee.length; i++ ){
            const employee = myEmployee[i];
            console.log( `${i}: ${employee.id}, ${employee.first_name}, ${employee.last_name}, ${employee.role_id}, ${employee.manager_id} `)
        }
        // console.log( myEmployee );

        await db.close();

    }

    //remove an employee
    function removeEmployee(employee){
        const myEmployee = employee((element) => element)
        return inquirer.prompt([
            {
                type: "checkbox",
                name: "remove",
                message: `Are you sure you want to remove ${employee[0].first_name} ${employee[0].last_name}`,
                choices: ["Yes", "No"],
            } 
        ])
    
    }

    //update an employee
    // function updateEmployee(employee){
    //     return inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "first_name",
    //             message: "What is the empoyees first name?",
    //         },
    //         {
    //             type: "input",
    //             name: "last_name",
    //             message: "What is the empoyees last name?",
    //         },
    //         {
    //             type: "input",
    //             name: "role_id",
    //             message: "What is their role within the department?",
    //         },
    //         {
    //             type: "input",
    //             name: "manager_id",
    //             message: "What is the name of their manager?",
    //         },
    //         {
    //             type: "checkbox",
    //             name: "update",
    //             message: `Are you sure you want to update ${employee[0].first_name} ${employee[0].last_name}`,
    //             choices: ["Yes", "No"],
    //         }
    //     ])
    // }
    // updateEmployee();

    async function addEmployee(employee){
        const add = await db.addEmployee(employee)

        return inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the empoyees first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the empoyees last name?",
            },
            {
                type: "input",
                name: "role_id",
                message: "What is their role within the department?",
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the name of their manager?",
            },
            {
                type: "checkbox",
                name: "add",
                message: `Are you sure you want to add ${employee[0].first_name} ${employee[0].last_name}`,
                choices: ["Yes", "No"],
            }
        ])
    }

    //updates employee role
    async function updateRole(employeeRole){
        const update = await db.updateRole(employeeRole)
        return inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the empoyees first name?",
            },
            {
                type: "input",
                name: "title",
                message: "What is the empoyees last name?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is their role within the department?",
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the name of their manager?",
            },
            {
                type: "checkbox",
                name: "add",
                message: `Are you sure you want to update ${employee[0].first_name} ${employee[0].last_name}`,
                choices: ["Yes", "No"],
            }
        ])
    }

    async function removeRole(employeeRole){
        const remove = await db.removeRole(employeeRole)

        return inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the empoyees first name?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the empoyees last name?",
            },
            {
                type: "input",
                name: "department_id",
                message: "What is their role within the department?",
            },
            {
                type: "checkbox",
                name: "add",
                message: `Are you sure you want to remove ${employee[0].first_name} ${employee[0].last_name}`,
                choices: ["Yes", "No"],
            }
        ])
    }

    async function updateEmployeeDepartment(employeeDepartment){
        const updateEDepartment = await db.updateEmployeeDepartment(employeeDepartment)
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their role within the department?",
            },
            {
                type: "checkbox",
                name: "removeRole",
                message: `Are you sure you want to update the ${employee[0].first_name} ${employee[0].last_name} role`,
                choices: ["Yes", "No"],
            }
        ])
    }

    async function removeEmployeeDepartment(employeeDepartment){
        const removeDepartment = await db.removeEmployeeDepartment(employeeDepartment)

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their role within the department?",
            },
            {
                type: "checkbox",
                name: "removeRole",
                message: `Are you sure you want to update the ${employee[0].first_name} ${employee[0].last_name} role`,
                choices: ["Yes", "No"],
            }
        ])
    }

//view employee, department and employee role
module.exports = {removeEmployeeDepartment, updateEmployeeDepartment, removeRole, updateRole, addEmployee, employeeInfo, employeeRole, employeeDepartment, } 