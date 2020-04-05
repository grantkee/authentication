const jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
  console.log(`logging route: ${req.url} - ${new Date().toISOString()}`)
}

const authenticate = (req, res, next) => {
  let header = req.headers['auth'];
  let token = header.split(' ')[1];

  jwt.verify(token, 'secret', (err, decoded) => {
    console.log(decoded)
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