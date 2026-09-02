const prompt=require('prompt-sync')();
let n= prompt('nombres pairs : ' );
 for(let indx = 1; indx <=n; indx ++){
    if (indx % 2 == 0)
        console.log('nombre ' +indx) 
}