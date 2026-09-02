prompt = require('prompt-sync')();
n = prompt('Nombre : ');

if (n<0)
    console.log("negatif")

else if (n==0)
    console.log("null")

else
    console.log("positif")
