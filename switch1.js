console.log("1 → Afficher le profil")
console.log("2 → Afficher les paramètres")
console.log("3 → Afficher les notifications")
console.log("4 → Se déconnecter")


prompt = require('prompt-sync')();
n = +prompt('Menu dapplication :  ');

//let choix = +prompt("Entrez votre choix : ")
switch (n){
    case 1:
        console.log("1 → Afficher le profil")
        break;

    case 2 :
        console.log("2 → Afficher les paramètres")
        break;
    
    case 3 :
        console.log("3 → Afficher les notifications")
        break;

    case 4 :
        console.log("4 → Se déconnecter")
        break;

    default :
        console.log("Choix invalide")

    }
