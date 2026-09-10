const numbers = [10 , 20, 3, 40, 5]
function trouverMax(tab){
    let i = 0;
    let max = 0;
    while (i < numbers.length){
        if (numbers[i] > max)
            max = numbers[i];
        i = i + 1;
    }
    return max;
}
