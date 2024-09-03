const jwt = require('jsonwebtoken')

const payload = {
    userId:'302001',
    name:"NarmadhaPalanivelu",
}
const secretkey = 'narmadha_bharathy';
const option = {
    expiresIn: '1h'
};
const token = jwt.sign(payload,secretkey,option);
console.log('Generate Token=>',token)

jwt.verify(token, secretkey, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);
    } else {
      console.log('Decoded Payload:', decoded);
    }
  });