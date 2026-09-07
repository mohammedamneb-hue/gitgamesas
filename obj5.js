console.log("1 → Afficher le solde: ")
console.log("2 → Déposer de l'argent: ")
console.log("3 → Retirer de l'argent: ")
console.log("4 → Verifier le solde: ")
console.log("5 → les informations du compte: ")
prompt = require('prompt-sync')();
n = +prompt('Menu BMCE :  ');

let account = {owner : "amine",
  solde : 6000 , 
    type : "saving"
}
switch(n){
case 1 :
    
    console.log("1 → Afficher le solde: ")
    console.log(account.solde)
    break ; 

case 2 : 
    console.log("2 → Déposer de l'argent: ")
    prompt = require('prompt-sync')();
n = +prompt('Déposer :  ');
 
   account.solde += n
   console.log(account.solde)

    break;
case 3 :
    console.log("3 → Retirer de l'argent: ")
        prompt = require('prompt-sync')();
n = +prompt('retirer :  ');

      if (n>6000)
        console.log("sold est insuffisant")
    else 
        console.log("sold suffisant")
    break ;

case 4 :
    console.log("4 → Verifier le solde: ")
}
