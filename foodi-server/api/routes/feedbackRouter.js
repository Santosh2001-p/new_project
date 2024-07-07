const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

// get all users
router.get('/', verifyToken, verifyAdmin, (req, res) => {
    feedbackController.getallFeedbacks(req, res)
})

// post a menu item
router.post('/', verifyToken, verifyAdmin, feedbackController.postMenuItem);
router.delete('/:id', verifyToken, verifyAdmin, feedbackController.deleteUser)

module.exports = router;
