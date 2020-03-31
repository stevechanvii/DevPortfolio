const jwt = require('jsonwebtoken');
const config = require('config');

// exporting of a middleware function to verify jwt
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied!' });
  }

  // Verify token
  try {
    const decode = jwt.verify(token, config.get('jwtSecret'));
    // take the request object and assign a value to user
    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
