var prompt = require('prompt-sync')();
var n = prompt('How old are you ? ');

if (n<18)
    console.log("acces refusee")
else if (n=> 18 )
    console.log("acces autorisee")