const mongoose = require('mongoose');

const Staff = mongoose.model('staff',new mongoose.Schema({
    Name: {
        type:String,
        minlength:3,
        required:true
    },
    Id:{
       type:String,
       required:true,
       unique:true
    },
    Gender: {
        type:String,
        maxlength:1,
        required:true
    },
    Date_of_birth: {
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        minlength:5,
        required:true
    }
}))

module.exports = Staff;