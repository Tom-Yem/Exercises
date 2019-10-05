const Student = require('../models/students');
const auth = require('../middlewares/authorization');
const express = require("express");
const router = express.Router();

router.post('/',auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');

    let student = await Student.findOne({Id:req.body.id});
    if(student) return res.status(400).send("Student already registered!");

    student = new Student({
       Name:req.body.name,
       Gender:req.body.gender,
       Id:req.body.id,
       Date_of_birth:req.body.dateOfBirth,
       Grade:req.body.grade,
       Class:req.body.class 
    })
    await student.save();
    res.send(student);

});

router.get('/:id',async(req,res) =>{
    const student = await Student.findOne({Id:req.params.id})
    .select('-Id -_id -__v');
    if(!student) return res.status(400).send("No student with this id!");
    res.send(student); 
});

router.put('/',auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');
   
   const student = await Student.updateOne({Id:req.body.id},{
       $set: {
        Name:req.body.name,
        Gender:req.body.gender,
        Id:req.body.id,
        Date_of_birth:req.body.dateOfBirth,
        Grade:req.body.grade,
        Class:req.body.class 
       }
   });
   res.json({"Data_modified":student.nModified})
});

router.delete('/',auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');

    const student = await Student.deleteOne({Id:req.body.id})
    res.send(student);
}); 

module.exports = router;