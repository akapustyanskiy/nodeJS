const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in secondds
console.log('The System uptime is ' + os.uptime() + ' sec');

// info about system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log((currentOS));

