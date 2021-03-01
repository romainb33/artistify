const express = require("express");
const router = express.Router();

const ArtistModel = require("../model/Artist");
const upload = require("../config/cloudinary");

/* GET artists table */
router.get("/", async (req, res, next) => {
  try {
    const artists = await ArtistModel.find();
    res.render("dashboard/artists", { artists }); //add the view
  } catch (err) {
    next(err);
  }
});

/* GET artist form */
router.get("/create", (req, res, next) => {
  res.render("dashboard/artistCreate");
});

router.post("/create", upload.single("picture"), (req, res, next) => {
  console.log("hey");
  // res.send("debug")
  let { name, description, isBand, picture } = req.body;
  if (req.file) {
    picture = req.file.path;
  }
  ArtistModel.create({
    name,
    description,
    isBand: isBand === "on",
    picture,
  })
  .then(console.log("yo"))
  .then(res.redirect("/dashboard/artist"))
  .catch((err) => next(err));
});

/* GET update form */
router.get("/update", upload.single("picture"), (req, res, next) => {
  
});

router.post("/update", upload.single("picture"), (req, res, next) => {
  
});


module.exports = router;