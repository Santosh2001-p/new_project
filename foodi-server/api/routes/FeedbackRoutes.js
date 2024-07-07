const express = require('express')
const router = express.Router()

const Feedback = require('../models/Feedback')

const { body, validationResult } = require('express-validator');
//for authtoken


//post means sending data to db
//createuser is one of the end point
router.post("/add_feedback",
    [
        body('itemname').isLength({ min: 5 }),
        body('review').isLength({ min: 5 })
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        try {


            await Feedback.create({
                itemname: req.body.itemname,
                review: req.body.review,


            })
                .then(res.json({ success: true })
                )

        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
module.exports = router;