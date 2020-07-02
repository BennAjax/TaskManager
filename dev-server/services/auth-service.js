import jwt from 'jsonwebtoken';

export function generateJWT(user) {
  const tokenData = { username: user.username, id: user._id };
  return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

export function decodeToken(req) {
  const token = req.headers.authorization || req.headers['authorization'];

  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (e) {
    return null;
  }
}

export function requireLogin(req, res, next) {
  const token = decodeToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Please Login' });
  }
  next();
}

export function getUsername(req) {
  const token = decodeToken(req);
  if (!token) {
    return null;
  }
  return token.user.username;
}

export function getUserId(req) {
  const token = decodeToken(req);
  if (!token) {
    return null;
  }
  return token.user.id;
}