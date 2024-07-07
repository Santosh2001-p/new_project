const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.post('/retrive_address', (req, res) => {
    try {

        res.send([global.Appliedjobdata])

    } catch (error) {
        console.log(error.message);
        res.send("Error hey dislpay main")
    }
})

module.exports = router;