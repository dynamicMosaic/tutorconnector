const jwt = require('jsonwebtoken');
const config = require('config');



module.export = function (req, res, next) {
   
   const token = req.header('x-auth-token')

// Check for token
    if (!token){
        return res.status(401).json({msg: "No token"}) 
    }

// Verify Token
try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
}
catch (error) {
    res.status(401).json({msg: 'Token not valid'})

}


}