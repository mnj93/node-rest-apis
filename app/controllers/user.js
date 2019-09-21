const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.CREATE_USER = async (req, res, next) => {
    try{
        // console.log('inside_controller');
        const user = await models.users.findOne({where: {email: req.body.email}});
        // console.log(user)
        if(!user){
            let user_payload = req.body;
            user_payload.password = await bcrypt.hash(user_payload.password, 10);
            const new_user = models.users.create(user_payload);
            res.status(200).json({status: "success", message: "User created successfully."});
        }else{
            res.status(422).json({status: "error", message: "User already exists with same email."})
        }
    }
    catch(e){
        next(e);
    }
}

exports.DASHBOARD = async (req, res, next) => {
    try{
        // console.log('inside_controller');
        const user = await models.users.findOne({where: {email: req.user_email},
            attributes: ['full_name', 'email', 'phone_number', 'date_of_birth'],
        });
        return res.status(200).json({user});
    }
    catch(e){
        next(e);
    }
}