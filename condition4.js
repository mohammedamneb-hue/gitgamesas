prompt = require('prompt-sync')();
n = prompt('Montant de la commande :  '); 




if (n > 499)
    console.log("livraison gratuite")

else if (n < 500)
    console.log("livraison non gratuite")