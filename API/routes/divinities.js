const express = require("express");
const router = express.Router();

const Divinity = require("../schemas/Divinities");

router.put("/put/:znak/:kategoria/:text", async (req, res) => {
  const { kategoria, text, znak } = req.params;
  const { update } = req.body;

  const toChange = {};
  toChange[`kategoria.${kategoria}`] = text;

  await Divinity.findOneAndUpdate({ nazwa: znak }, { $pull: toChange })
    .then(async () => {
      toChange[`kategoria.${kategoria}`] = update;
      await Divinity.findByIdAndUpdate({ nazwa: znak }, { $push: toChange })
        .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  return;
});
//random divinity daily

router.get("/", async (req, res) => {
  const allDivinities = await Divinity.find().then((result) => {
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

router.get("/all/:kat/:znak", async (req, res) => {
  const { kat, znak } = req.params;
  const allDivinitiesForZnak = await Divinity.findOne({ nazwa: znak }).then(
    (result) => {
      const wrozba = result.kategoria[kat];
      res.send({
        wrozba: wrozba,
      });
    }
  );
  return;
});

router.post("/add/:znak/:kategoria/:text", async (req, res) => {
  const { kategoria, text, znak } = req.params;
  const new_object = {};
  new_object[`kategoria.${kategoria}`] = text;
  await Divinity.findOneAndUpdate({ nazwa: znak }, { $push: new_object });

  return res.send(req.body);
});

router.delete("/delete/:znak/:kategoria/:text/", async (req, res) => {
  const { kategoria, text, znak } = req.params;

  const new_object = {};
  new_object[`kategoria.${kategoria}`] = text;
  await Divinity.findOneAndUpdate({ nazwa: znak }, { $pull: new_object });

  return res.send(req.body);
});

router.get("/:kategoria/:znak", async (req, res) => {
  const { kategoria, znak } = req.params;
  console.log(req.params);
  const allDivinitiesForZnak = await Divinity.findOne({ nazwa: znak }).then(
    (result) => {
      const wrozba = result.kategoria[kategoria];
      const wynik = wrozba[Math.round(Math.random() * 100) % wrozba.length];
      res.send({
        wrozba: wynik,
      });
    }
  );
  return;
});

module.exports = router;
