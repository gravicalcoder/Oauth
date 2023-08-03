const request = require('superagent');

const url = 'http://localhost:5000/getToken';

/*
const requestBody = {
  "code":"4/0AZEOvhVtLEnxAt3jBuI_GCfyt9B9lC9tW6h5x_5HJzxAhVrGRyabB81FDaSMWY31uSLFZQ"
};
*/
//  ini pasti expired
const requestBody = {
  "code":"4/0AZEOvhX3JWgkIJwNktOWyoH58wyHcn_qt0EzPzG9KyAeCz7W0ZZ_PkLI_HaswCnpSDc1cg"
};





/*
request
  .post(url)
  .send(postData) // Mengirim data dalam body permintaan POST
  .end((err, res) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Response:', res);
    }
  });
  */
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
