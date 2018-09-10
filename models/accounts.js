'use strict'

module.exports = function (obj) {
    const account = [
        {
            email: "thisisnanda@gmail.com",
            password: "1234"
        }
    ];

    for(let i=0; i < account.length; i++) {
        if((account[i].email === obj.email.toString()) &&  (account[i].password === obj.password.toString())){
            return "success"
        }
    }
    return "failure";
}
