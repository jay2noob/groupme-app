const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
    
    res.send("Profile route")

});


router.get("/:userId", user.getSingleUser);


module.exports = router;

