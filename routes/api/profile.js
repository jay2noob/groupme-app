const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("Profile route");
});

router.get("/:userId", (req, res) => {
  User.findOne({ _id: req.params.userId }, { email: 0, password: 0 }).then(
    (user) => {
      if (!user) {
        return res
          .status(404)
          .send({ err: "User with email " + email + " not found." });
      }

      res.send(user);
    }
  );
});

module.exports = router;
