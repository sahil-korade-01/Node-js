import chalk from 'chalk';
import validator from 'validator';
// console.log(chalk.green.underline.inverse('Hello world!'));


const result = validator.isEmail("sahil@123.com")
console.log(result ?  chalk.green.inverse(result) :chalk.red.inverse(result));