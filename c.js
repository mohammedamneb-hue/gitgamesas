let arr = [10, 20, 30, 40, 50];
function printElement(tab) {
    let i = 0
    while (tab[i]) {

        i++;
    }
    console.log(tab)

}
printElement([10, 20, 30, 40, 50])

// function additionnerTout(tab) {

//     let sum = 0
//     for(i = 0 ;tab[i] ; i++)

//     sum = sum + tab[i]
//     console.log(sum)
// }

// additionnerTout([10, 20, 30, 40, 50])

function findmoyenne(avg) {
    let sum = 0
    let moyenne;
    for (i = 0; i < avg.length; i++) {
        sum = sum + avg[i]
    }
    {
        moyenne = sum / avg.length
    }
    console.log(moyenne)
}
findmoyenne([10, 20, 30, 40, 50])


function largestnumber(max) {
    let max1 = 0
    for (let i = 0; i < max.length; i++) {
        if (max1 < max[i])
            max1 = max[i]
    }
    console.log(max1)
}
largestnumber([10, 20, 30, 40, 50])


function pairenumber(num) {
    let num1 = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0)
            num1++
    }
    console.log(num1)
}
pairenumber([1, 2, 3, 4, 5])



function impairenumber(tab){
    let num=0
for(let i=0 ; i<tab.length ; i++){
    if(tab[i] %2 !== 0)
        num++
}
console.log(num)
}
impairenumber([1, 2, 3, 4, 5])




