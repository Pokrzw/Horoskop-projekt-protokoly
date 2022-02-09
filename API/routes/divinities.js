const express = require("express");
const router = express.Router();

const Divinity = require("../schemas/Divinities");

//random divinity daily

router.get("/", async (req, res) => {
  const allDivinities = await Divinity.find()
  .then((result) => {
    const wynik = result[Math.round(Math.random() * 100) % 12];
    const znak = wynik.nazwa;
    const wrozba = wynik.kategoria.dzienny;
    res.send({
      znak: znak,
      wrozba: wrozba,
    });
  });
  return;
});

module.exports = router;
