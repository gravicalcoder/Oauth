const request = require('superagent');

const url = 'http://localhost:5000/deleteFile/sdfafergdfgbdfhgdyhnfg';

const requestBody = 
{

  // ganti dengan yang baru
    "token":{
    access_token: 'xxxxx',
    refresh_token: 'xxxxx',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly',
    token_type: 'Bearer',
    id_token: 'xxxxA',
    expiry_date: 123456789
    }
};


  const rawJsonText = JSON.stringify(requestBody);
 //const rawJsonText = requestBody

  request
    .post(url)
    .set('Content-Type', 'application/json') // Mengatur header Content-Type menjadi application/json
    .send(rawJsonText) // Mengirimkan body request dalam bentuk raw JSON text
    .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });