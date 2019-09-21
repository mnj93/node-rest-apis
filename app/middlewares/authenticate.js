var jwt = require('jsonwebtoken');

var models = require('../models');
const JWT_SECRET = process.env.JWT_SECRET;


const authenticate = function(req,res,next){
    const header = req.headers.authorization;
    let token;
    if(header) token = header.split(' ')[1];

    if(token){
        jwt.verify(token,JWT_SECRET,async (err,decoded) => {
            if(err){
                return res.status(403).send("Forbidden");
            }
            else{
                // console.log(decoded.user_email);
                req.user_email = decoded.user_email;
                const user = await models.users.findOne({where: {email: decoded.user_email}});
                if(!user){
                    return res.status(403).send("Forbidden");
                }
                next();
            }
        });
    }
    else{
        res.status(403).send("Forbidden");
    }
}


module.exports = authenticate;