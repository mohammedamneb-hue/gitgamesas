const prompt = require ("prompt-sync")();
 let exposant =prompt("exposant  ")
 let base=prompt("base")
 let i=0
 let result = 1
 while(i<exposant){
    result=result*base
    i++
 }
 console.log(result)


