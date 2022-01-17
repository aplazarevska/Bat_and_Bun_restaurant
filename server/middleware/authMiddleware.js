const { admin } = require("../config/firebase-config");

async function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  const idToken = authHeader ? authHeader.split(" ")[1] : null;

  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        if (decodedToken) {
          return next();
        }

        return res.status(401).json({ message: "Unauthorized" });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    return res.json({ message: `Internal error: ${err}` });
  }
};

module.exports = {
  protect
};
