const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send({ msg: 'Access Denied' });
  next();
};

export default verifyToken;
