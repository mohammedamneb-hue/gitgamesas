const prompt = require('prompt-sync')();
let n = +prompt(' Compte à rebours ');
let i = 0
while(i<=n)
    console.log(n--)