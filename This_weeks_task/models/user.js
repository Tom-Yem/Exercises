const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const schema = new mongoose.Schema({
    name:{ 
        type: String,
        required:true
    },
    email:{ 
        type: String,
        required:true,
        unique:true
    },
    password:{ 
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false}
})
schema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('privateKey'));
    return token;
}
const User = mongoose.model('users',schema);

function validateUser(user){
   const schema = {
       name: Joi.string().min(3).required(),
       email: Joi.string().min(5).required().email(),
       password: Joi.string().required()
   }
   return Joi.validate(user,schema);
}


module.exports.User = User;
module.exports.validateUser = validateUser;