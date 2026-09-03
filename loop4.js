const prompt = require('prompt-sync')();
let indx = +prompt('Table de multiplication ');
for(let i=1 ; i<=10 ; i++)
    console.log(indx +" X " +i + " = "+ indx*i)