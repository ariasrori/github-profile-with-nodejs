let profile = require('./profile.js');

// cara 1
// profile.get("ariasrori");
// profile.get("yofri");
// profile.get("ronishak");

// cara 2
// let profiles = ['ariasrori','yofri','ronishak']
// profiles.map(user => {
//     profile.get(user)
// })

// cara 3 => input user
let profiles = process.argv.slice(2)
profiles.map(profile.get)
