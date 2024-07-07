const Userfeedback = require("../models/Feedback");


// get all users
const getallFeedbacks = async (req, res) => {
    try {
        const users = await Userfeedback.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// post a menu item
const postMenuItem = async (req, res) => {
    const newMenu = req.body;
    try {
        const result = await Userfeedback.create(newMenu);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete user
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await Userfeedback.findByIdAndDelete(userId);
        // console.log(deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getallFeedbacks,
    postMenuItem,
    deleteUser
};
