// const prompt = require('prompt-sync')();
// let n = +prompt('  ');
const employees = [
    {
        "name": "Alice Johnson",
        "age": 29,
        "department": "Engineering",
        "salary": 75000
    },
    {
        "name": "Bob Smith",
        "age": 34,
        "department": "Marketing",
        "salary": 68000
    },
    {
        "name": "Carol Williams",
        "age": 41,
        "department": "Finance",
        "salary": 82000
    },
    {
        "name": "David Brown",
        "age": 26,
        "department": "Human Resources",
        "salary": 61000
    }
]


function avgAge(liste){
    let len = liste.length
    let sum = 0 ;
    for(let i = 0 ; i<liste.length ; i++){
        sum = liste[i].age+sum
    }
    console.log(sum/len)
}
avgAge(employees)


function MaxSalary(maxi){
    let max = 0
    let i = 0
    while( i<maxi.length){
       if(max<maxi[i].salary)
        max = maxi[i].salary
    i++
}
console.log(max)
}
MaxSalary(employees)





