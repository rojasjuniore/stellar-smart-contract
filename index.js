// Tenemos 3 cuentas 
// 1. - Cuenta de alice
// 2. - Cuenta de bob
// 3. - Cuenta de Escrow


// vamos a crear una interfaz
// primero te preguta quien eres
// alice o bod
// hacer diferentes operaciones

var inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'list',
            name: 'whois',
            message: 'Quien eres?',
            choices: ['alice', 'bob'],
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log("answers", answers)
    })
    .catch((error) => {
        console.log
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });