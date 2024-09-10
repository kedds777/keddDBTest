const express = require("express");
const router = express.Router();
const Video = require("../Models/videoModel");

// @route   GET api/videos
// @desc    Get all videos
// @access  Public

//////////
/*GET*/
//////////
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).send("Server error");
  }
});


router.get("/videos/:id", async (req, res) => {
  try {
    const videos = await Video.find({ _id: req.params.id });
    res.json(videos);
  } catch (err) {
    res.status(500).send("Server error: " + err);
  }
});

//////////
/*POST*/
//////////

router.post("/videos", async (req, res) => {
  const { title, description } = req.body;
  try {
    let user = new Video({ title, description });
    user = await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//////////
/*DELETE*/
//////////

router.delete("/videos", async (req, res) => {
    try {
      const adminHeader = req.headers.admin;
      if (adminHeader !== "allowAllDelete") {
        res
          .status(401)
          .send("Unauthorized - Please provide the correct admin header");
      }
      const videos = await Video.deleteMany();
  
      res.json(videos);
    } catch (err) {
      res.status(500).send("Server error");
    }
  });
  
  router.delete("/videos/:videoId", async (req, res) => {
      try {
        const videos = await Video.deleteOne({ _id: req.params.videoId });
        res.json(videos);
        
      } catch (err) {
        res.status(500).send("Server error: " + err);
      }
    });

module.exports = router;
