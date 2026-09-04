prompt = require('prompt-sync')();

n = prompt('pass? ');
 function verifierMotDePasse(){
    let yash = n.length;
    let mdp = n;
if (yash>8 && mdp.includes("@"))
    return true;
else 
    return false
 }
 console.log(verifierMotDePasse())
