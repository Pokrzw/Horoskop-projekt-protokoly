const express = require("express");
const router = express.Router();

const Icons = require("../schemas/IconSet");

router.get("/", async (req, res) => {
  await Icons.find().then((result) => {
    res.send({
      all: result,
    });
  });
  return;
});

module.exports = router;
