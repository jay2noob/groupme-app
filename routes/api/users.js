const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const fs = require('fs').promises;

const User = require("../../models/User");
const upload = require('../../utils/uploader');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  upload.single('profileImage'),
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("FILES", req.file);
    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        try {
          await fs.unlink(global.__basedir + '/public/img/' + req.file.filename);
        } catch (e) {
          console.log(e);
        }
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
       // Get users gravatar
      let avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      if (req.file && req.file.filename) {
        avatar = req.file.filename;
      }

      user = new User({
        name,
        email,
        avatar,
        password,
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
