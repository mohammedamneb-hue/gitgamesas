const prompt = require ("prompt-sync")();
 let exposant=prompt("exposant  ")
 let base=prompt("base")
 let i=0
 let resultat=1
 while(i<exposant){
    resultat=resultat*base
    i++
 }
 console.log(resultat)


