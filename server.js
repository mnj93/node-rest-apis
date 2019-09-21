const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const server = app.listen(PORT || 5000,()=>{
    console.log('server running on port ',server.address().port);
})
require('./routes')(app);
 //error handler
 app.use(function(err, req, res, next) {
    if(process.env.NODE_ENV === 'production'){
        return res.status(err.status || 500).send({
            success: "false",
            msg: 'Internal Server Error!',
            data:null
        });
    }
    else{
            console.log('Error Message : '+err.stack);
            return res.status(err.status || 500).send({
                success: "false",
                msg: err.message,
                data:null
            });
        }
  });