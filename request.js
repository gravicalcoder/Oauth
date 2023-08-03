const request = require('superagent');

const url = 'http://localhost:5000/getAuthURL';
//const url = 'http://localhost:5000/getToken';
//const url = 'http://localhost:5000/';


request
  .get(url)
  .end((err, res) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Response:', res.text);
    }
  });
