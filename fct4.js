function additionnerTout(){
    
return Array.from(arguments).reduce((a,b)=> a + b , 0);
}
console.log( additionnerTout(122,122,122))