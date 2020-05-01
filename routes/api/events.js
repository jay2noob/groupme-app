const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Event = require("../../models/Event");
const User = require("../../models/User");
const upload = require('../../utils/uploader');
const Group = require('../../models/Group')

// @route   POST api/events
// @desc    Create an events
// @access  Private
router.post(
  "/",
  upload.single('eventImage'),
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("location", "Location is required").not().isEmpty(),
      check("time", "Time is required").not().isEmpty(),
      check("groupID", "A group ID is required").not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      let group = await Group.findById(req.body.groupID);

      const avatar = req.file && req.file.filename;
      const newEvent = new Event({
        groupID: req.body.groupID,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        time: req.body.time,
        image: avatar || user.avatar,
        host: req.user.id
      })

      const event = await newEvent.save()
      if (group) {
        group.events.unshift({ event: event._id })
        await group.save()
      }

      res.json(event)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error")
    }
  }
);

// @route    GET api/events/:page
// @desc     Get all events in the specified range
// @access   Private
router.get("/:page", auth, async (req, res) => {
  const pageOptions = {
    page: parseInt(req.params.page, 10) || 0,
    limit: global.pageOptions.limit
  }
  try {
    const events = await Event.find()
      .sort({ date: -1 })
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/events/:id
// @desc     Get events by ID
// @access   Private
router.get("/event/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    // Check for ObjectId format and post
    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Event not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/events/:id
// @desc     Delete an event
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }
    // Check user
    if (event.host.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Only host can delete the event." });
    }
    await event.remove();
    res.json({ msg: "Event removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Event not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/events/going/:id
// @desc     Mark an event as going
// @access   Private
router.put("/going/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    // Check if the post has already been liked
    if (event.going.filter((one) => one.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: "Already marked as going" });
    }
    event.going.unshift({ user: req.user.id }); // unshift adds the item to the start of the array.
    await event.save();
    res.json(event.going);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/events/ungoing/:id
// @desc     Makr an event as not going
// @access   Private
router.put("/ungoing/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    // Check if the post has already been liked
    if (event.going.filter((one) => one.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: "Event is not marked as going" });
    }
    // Get remove index
    const removeIndex = event.going
      .map((single) => single.user.toString())
      .indexOf(req.user.id);
    event.going.splice(removeIndex, 1); 
    await event.save();
    res.json(event.going);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route    PUT api/events/going/:id
// @desc     Mark an event as maybe
// @access   Private
router.put("/maybe/:id", auth, async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      // Check if the post has already been liked
      if (event.maybe.filter((one) => one.user.toString() === req.user.id).length > 0) {
        return res.status(400).json({ msg: "Already marked as maybe" });
      }
      event.maybe.unshift({ user: req.user.id });
      await event.save();
      res.json(event.maybe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  
  // @route    PUT api/events/unmaybe/:id
  // @desc     Makr an event as not maybe
  // @access   Private
  router.put("/unmaybe/:id", auth, async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      // Check if the post has already been liked
      if (event.maybe.filter((one) => one.user.toString() === req.user.id).length === 0) {
        return res.status(400).json({ msg: "Post is not marked as going" });
      }
      // Get remove index
      const removeIndex = event.maybe
        .map((single) => single.user.toString())
        .indexOf(req.user.id);
      event.maybe.splice(removeIndex, 1);
      await event.save();
      res.json(event.maybe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

// @route    POST api/events/comment/:id
// @desc     Comment on an event
// @access   Private
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const event = await Event.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };
      event.comments.unshift(newComment);
      await event.save();
      res.json(event.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/events/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    // Pull out comment
    const comment = event.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    // Get remove index
    const removeIndex = event.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);
    event.comments.splice(removeIndex, 1);

    await event.save();

    res.json(event.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
