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

        // TODO: [x] Print the data out
        // console.log(profile.login + ' owns ' + profile.public_repos + '');
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`);
    })
});

request.end();

request.on('error',(e) => {
  console.log(e);
});
