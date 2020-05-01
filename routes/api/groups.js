const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Group = require("../../models/Group");
const User = require("../../models/User");
const upload = require('../../utils/uploader');

// @route   POST api/groups
// @desc    Create a post
// @access  Private
router.post(
  "/", 
  upload.single('groupImage'), 
  [auth, 
    [
      check("name", "A group name is required").not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const avatar = req.file && req.file.filename;
      const newGroup = new Group({
        name: req.body.name,
        admin: req.user.id,
        description: req.body.description,
        avatar: avatar || user.avatar,
        members: req.body.members,
        posts: req.body.posts,
        events: req.body.events
      });

      const group = await newGroup.save();

      res.json(group);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


// @route    PUT api/groups/join/:id
// @desc     Makr an event as not going
// @access   Private
router.put("/join/:id", auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    // Check if user is already a member
    if (group.members.filter((one) => one.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: "Already a member of the group" });
    }

    group.members.unshift({ user: req.user.id });
    await group.save();
    res.json(group.members);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/groups/group/:id/event
// @desc     Create an event
// @access   Private
router.put("/group/:id/event", auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);

    const newEvent = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      image: req.body.image,
      going: req.body.going,
      maybe: req.body.maybe,
      date: req.body.date
    }
    
    group.events.unshift(newEvent);
    await group.save();
    res.json(group.events);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/groups/group/:id/post
// @desc     Create an post
// @access   Private
router.put("/group/:id/post", auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);

    const newPost = {
      name: req.body.name,
      admin: req.user.id,
      text: req.body.text,
    }
    
    group.posts.unshift(newPost);
    await group.save();
    res.json(group.posts);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/groups/:page
// @desc     Get all in the specified range
// @access   Private
router.get("/:page", auth, async (req, res) => {

  const pageOptions = {
    page: parseInt(req.params.page, 10) || 0,
    limit: global.pageOptions.limit
  }
  try {
    const groups = await Group.find()
      .sort({ date: -1 })
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.json(groups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

});

// @route    GET api/groups/group/:id
// @desc     Get group by group id
// @access   Private
router.get("/group/:id", auth, async (req, res) => {

  try {
    let group = await Group.findById(req.params.id)
    // Check for ObjectId format and group
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !group) {
      return res.status(404).json({ msg: 'group not found' });
    }

    // Check if the post has already been liked
    group = JSON.parse(JSON.stringify(group))
    if (group.members.filter((one) => one.user.toString() === req.user.id).length > 0) {
      group.joined = true
    } else {
      group.joined = false
    }
    res.json(group)
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    // Check for ObjectId format and post
    if (!group) {
      return res.status(404).json({ msg: "Group not found" });
    }
    res.json(group);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Group not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ msg: "Group not found" });
    }
    // Check user
    if (group.admin.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Only Admin can delete a group" });
    }
    await group.remove();
    res.json({ msg: "Group removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Group not found" });
    }
    res.status(500).send("Server Error");
  }
});


module.exports = router;
