let employer = {firstName : "amine" , 
    lastName : "med" , 
    salary : 8000 , 
    bonus : 1000 , 
    absenceDays : 5 }
    let penaltie = 200
    let x = employer.absenceDays * penaltie
    let y = employer.salary +employer.bonus - x
    console.log("employer firstName : " + employer.firstName)
    console.log("employer lastName : " + employer.lastName)
    console.log("employer salary : " + employer.salary)
    console.log("employer bonus : " + employer.bonus)
    console.log(y)
    