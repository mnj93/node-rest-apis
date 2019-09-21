const userRoute = require('./app/routes/user');
const authRoute = require('./app/routes/auth')
module.exports = (app)=>{
    app.get('/',(req, res, next)=>{
        res.status(200).send("Welcome");
    });
    app.use('/user', userRoute);
    app.use('/auth', authRoute);
    app.get('/*',(req,res) => {
        res.status(404).json('Resource Not Found !!!');
    });
}