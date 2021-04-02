const UserSchema = require('../models/user');
const User = async (req, res,next)=>{
    try{
        const {name,email,password} = req.body;
        const user = await UserSchema.create({ 
            name,
            email,
            password
         });
        //  console.log(req.body);
         res.json(user);
    }
    catch(err){
        return next(err);
    }
    };
    module.exports = User