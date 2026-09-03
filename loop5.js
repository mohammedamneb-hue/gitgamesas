const prompt = require('prompt-sync')();
let N =+prompt('N = ')
let X =+prompt('X = ')
for(let i = 1 ; i*X <= N ; i++) 
    console.log(i*X)

