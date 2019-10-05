const Staff = require('../models/staff');
const auth = require('../middlewares/authorization');
const express = require("express");
const router = express.Router();

router.post('/', auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');

    let staff = await Staff.findOne({Id:req.body.id});
    if(staff) return res.status(400).send("Staff memeber already registered!");

    staff = new Staff({
       Name:req.body.name,
       Gender:req.body.gender,
       Id:req.body.id,
       Date_of_birth:req.body.dateOfBirth,
       Occupation:req.body.occupation 
    })
    await staff.save();
    res.send(staff);

});

router.get('/:id',async(req,res) =>{
    const staff = await Staff.findOne({Id:req.params.id})
    .select('-Id -_id -__v');
    if(!staff) return res.status(400).send("No staff member with this id!");
    res.send(staff); 
});

router.put('/',auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');

    const staff = await Staff.updateOne({Id:req.body.id},{
        $set: {
         Name:req.body.name,
         Gender:req.body.gender,
         Id:req.body.id,
         Date_of_birth:req.body.dateOfBirth,
         Occupation:req.body.occupation 
        }
    });
    res.json({"Data_modified":staff.nModified})
 });

router.delete('/',auth,async(req,res) =>{
    if(!req.user.isAdmin) return res.status(401).send('Unauthorized operation:\nYou do not have the right privilage!');

    const staff = await Staff.deleteOne({Id:req.body.id})
    res.send(staff);
}); 

module.exports = router;