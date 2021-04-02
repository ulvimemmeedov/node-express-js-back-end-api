const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    }
});
UserSchema.pre("save",function(next){
    if(this.isModified("password")) {
        next();
    }
bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) next(err);
        this.password = hash;
        console.log(hash);
        next();
    });
});
});

module.exports = mongoose.model("User",UserSchema);