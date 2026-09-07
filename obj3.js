let product = {Name : "yash",
    price : 150,
    category : "game",
    quantity : 50,
    availaible : 5
}
let some = "not available";

if(product.availaible){
    some = "is available";
}
totale = product.availaible * product.price;
console.log(product);
console.log(some);
console.log(totale)