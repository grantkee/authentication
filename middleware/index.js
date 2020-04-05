const jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
  console.log(`logging route: ${req.url} - ${new Date().toISOString()}`)
  next()
}

const authenticate = (req, res, next) => {
  let header = req.headers['auth'];
  if(!header) return res.status(400).send('Invalid credentials. Please login at route /auth/login');
  console.log('header', header)
  let token = header.split(' ')[1];

  console.log('authentication happening');

  jwt.verify(token, 'secret', (err, decoded) => {
    console.log('decoded', decoded)
    if(decoded){
      req.user = decoded
      next()
    }
    else{
      console.log(err)
      res.sendStatus(401)
    }
  });
}

module.exports = {
  logger,
  authenticate
};