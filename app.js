// TODO: [X] Connect to Github API
let https = require('https')

const options = {
    hostname : 'api.github.com',
    port : 443,
    path : '/users/ariasrori',
    method : 'GET',
    headers: {
        'user-agent' : 'nodejs'
    }
}

const request = https.request(options, (result) => {
    console.log(result.statusCode);
});

request.end();

request.on('error',(e) => {
});

console.log(e);

// TODO: Read the data
// TODO: Parse the data
// TODO: Print the data out
