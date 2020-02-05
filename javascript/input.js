//sytax for console and file input

const readline = require('readline');

//Console configuration
const user = readline.createInterface({

  input:process.stdin,
  output:process.stdout
});

//console input
user.question('Filename: ', function(filename)
{
  console.log(filename);

});

//This part isnt after the console input
console.log('here');
