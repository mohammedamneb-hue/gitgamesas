
let user = { username :"Ahmed",
    age : 24,
    city : "marrakesh",
    status : "student" , 
    email: "ahmed.22@gmail.com"
};
console.log(" user Name : " +  user.username)
console.log(" user Age : " +  user.age)
user.age = 25
console.log("user City : " + user.city)
user.city = "youssoufia"
console.log("user status : " + user.status)
user.status = "employer";
console.log(" user Email : "  +user.email)

console.log(`${user.username} ${user.age} a ${user.city} ${user.status} ${user.email} `)
