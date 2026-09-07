const numbers = [15, 12, 8, 110, 44];
function trouverMax(tab){
    let max = 0
for(let i = 1 ; i<numbers.length; i++){
    if (max<numbers[i])
        max=numbers[i]
}
console.log(max)
}
trouverMax(numbers)