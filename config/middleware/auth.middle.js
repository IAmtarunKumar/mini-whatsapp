const jwt = require("jsonwebtoken");
// const { BlacklistModel } = require("../../model/blacklist.model");

const auth = async(req, res, next) => {
  var token = req.headers.authorization;
//   console.log(token);

  

 
   


  jwt.verify(token, "masai", function (err, decoded) {
    if (err) {
      console.log(err);
    } else {
      next();
    }
  });
};



module.exports = {
  auth,
};
