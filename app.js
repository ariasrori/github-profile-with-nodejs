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

// TODO: [x] Read the data
let request = https.request(options, (response) => {
    let body = ''
    console.log('response : '+response.statusCode);
    response.on('data', (data) => {
        body += data
    })
    response.on('end', () => {

        // TODO: [x] Parse the data
        // Conver String to JSON (JavaScript Object)
        let profile = JSON.parse(body);
        console.log(profile.avatar_url);
    })
    // TODO: Print the data out
});

request.end();

request.on('error',(e) => {
  console.log(e);
});
