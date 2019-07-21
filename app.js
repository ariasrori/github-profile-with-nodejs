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

// TODO: Read the data
let request = https.request(options, (response) => {
    let body = ''
    console.log('response : '+response.statusCode);
    response.on('data', (data) => {
        body += data
    })
    response.on('end', () => {
        console.log(typeof body);
    })
    // TODO: Parse the data
    // Conver String to JSON (JavaScript Object)
    // TODO: Print the data out
});

request.end();

request.on('error',(e) => {
  console.log(e);
});
