module.exports = function (req, res, next) { 
  if (!req.verifiedUser.isWriter) {
    return res.status(403).json("you are not a writer");
  } else {
    next();
  }
 }