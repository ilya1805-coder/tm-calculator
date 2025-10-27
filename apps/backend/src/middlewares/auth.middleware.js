import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return res.sendStatus(403);
  }
}
