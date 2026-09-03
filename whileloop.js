const prompt = require('prompt-sync')();
let n = +prompt('Somme des nombres ');
let sum = 0; 
for(let i = 1; i <= n; i++) {
     sum = sum + i;
}
 console.log(sum)
 