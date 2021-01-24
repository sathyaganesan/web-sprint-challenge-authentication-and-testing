module.exports = (req, res, next) => {
  try {
    if (!req.session || !req.session.users) {
      return res.status(401).json({
        Message: "Token Invalid"
      })
    }
    next();
  } catch (err) {
    next(err)
  }

  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
