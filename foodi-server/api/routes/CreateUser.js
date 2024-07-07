const express = require("express");


router = express.Router();
const Feedback = require("../models/Feedback");
//const Resume = require('../models/Resume')
const { body, validationResult } = require('express-validator');



router.post("/register", [body('name').isLength({ min: 5 }), body('email').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).send({
                message: "lenght of the entered data should be 5 characters atleast",


                success: false,
            });
        }
        else if (!errors.isEmpty()) {
            return res.status(500).send({
                message: "Length of the review should be 5 characters atleast",


                success: false,
            });
        }






        try {




            const newUser = new Feedback({
                name: req.body.name,
                email: req.body.email,




            });
            await newUser.save()





            return res.status(201).send({
                message: "Feedback sent successfully",

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



    })




module.exports = router;