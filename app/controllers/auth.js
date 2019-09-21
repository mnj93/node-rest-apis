const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.USER_AUTH = async (req, res, next) => {
    try{
        // console.log('inside_controller');
        const user = await models.users.findOne({where: {email: req.body.email}});
        console.log(user)
        if(user){
            let user_payload = req.body;
            const match = await bcrypt.compare(user_payload.password, user.password);
            if(match){
                const userToken =  jwt.sign({user_email:user_payload.email},process.env.JWT_SECRET);
                res.status(200).json({status: "success", token: userToken});
            }
           else{
            res.status(400).json({status: "error", message: "Invalid credentials."})
           }
        }else{
            res.status(400).json({status: "error", message: "Invalid credentials."})
        }
    }
    catch(e){
        next(e);
    }
}