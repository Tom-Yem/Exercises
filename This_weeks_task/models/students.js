const mongoose = require('mongoose');

const Student = mongoose.model('students',new mongoose.Schema({
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
    Grade: {
        type:Number,
        max:12,
        required:true
    },
    Class: {
        type:String,
        maxlength:2,
        required:true
    }
}))

module.exports = Student;