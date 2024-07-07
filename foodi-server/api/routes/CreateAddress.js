const express = require("express");


router = express.Router();
const Feedback = require("../models/User");
//const Resume = require('../models/Resume')
const { body, validationResult } = require('express-validator');



router.post("/address", [body('mobile').isLength({ min: 5 }), body('pincode').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).send({
                message: "Length of the mobile should be 10 characters atleast",


                success: false,
            });
        }
        else if (!errors.isEmpty()) {
            return res.status(500).send({
                message: "Length of the pincode should be 9 characters atleast",


                success: false,
            });
        }

              try{

              

        const newUser = await Feedback.findOne({
            'email': req.body.email,
           
            
        });
        
        if (!newUser) {
            // Handle the case where the document is not found
            return res.status(404).json({ success: false, message: 'Document not found' });
        }
        
        // Update the status field to "Accepted"
       // newUser.status = "Accepted";
        newUser.mobile= req.body.mobile,
        newUser.pincode=req.body.pincode,
        newUser.village=req.body.village,
        newUser.platno= req.body.plat,
        newUser.landmark=req.body.land,
        newUser.email= req.body.email,

        
        // Save the updated document to the database
        await newUser.save();
        return res.status(201).send({
            message: "Address added  successfully",

            success: true,
        });
    }
    catch (error) {
        console.log(error);

        return res.status(500).send({
            message: "Register error",

            success: false,
        });

    }

        // try {




        //     const newUser = new Feedback({
        //         mobile: req.body.mobile,
        //         pincode: req.body.pincode,
        //         village: req.body.village,
        //         platno: req.body.plat,
        //         landmark: req.body.land,
        //         email: req.body.email,





        //     });
        //     await newUser.save()





        //     return res.status(201).send({
        //         message: "Address added  successfully",

        //         success: true,
        //     });


        // }

        // catch (error) {
        //     console.log(error);

        //     return res.status(500).send({
        //         message: "Register error",

        //         success: false,
        //     });

        // }



    })




module.exports = router;








// const mydata = await AppledByStudent.findOne({
//     'studentEmail': req.body.studentEmail,
//     'studentName': req.body.studentName,
//     'name': req.body.name,
//     'role': req.body.role,
    
// });

// if (!mydata) {
//     // Handle the case where the document is not found
//     return res.status(404).json({ success: false, message: 'Document not found' });
// }

// // Update the status field to "Accepted"
// mydata.status = "Accepted";

// // Save the updated document to the database
// await mydata.save();
