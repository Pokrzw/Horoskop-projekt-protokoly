const express = require("express");
const router = express.Router();

const Divinity = require("../schemas/Divinities");

router.put("/put/:znak/:kategoria/:text", async (req, res) => {
  const { kategoria, text, znak } = req.params;
  const { update } = req.body;

  // if (kategoria === "zdrowie") {
  //   await Divinity.updateOne(
  //     { nazwa: znak, "kategoria.zdrowie": text },
  //     { $set: { "kategoria.$": update } }
  //   ).then(() => {
  //     return res.sendStatus(200);
  //   });
  // }
  // if (kategoria === "kariera") {
  //   await Divinity.updateOne(
  //     { nazwa: znak, "kategoria.kariera": text },
  //     { $set: { "kategoria.$": update } }
  //   ).then(() => {
  //     return res.sendStatus(200);
  //   });
  // }
  // if (kategoria === "relacje") {
  //   await Divinity.updateOne(
  //     { nazwa: znak, "kategoria.relacje": text },
  //     { $set: { "kategoria.$": update } }
  //   ).then(() => {
  //     return res.sendStatus(200);
  //   });
  // }
  // if (kategoria === "dzienny") {
  //   await Divinity.updateOne(
  //     { nazwa: znak, "kategoria.dzienny": text },
  //     { $set: { "kategoria.dzienny.lll": [update] } }
  //   ).then(() => {
  //     return res.sendStatus(200);
  //   });
  // }

  const toChange = {};
  toChange[`kategoria.${kategoria}`] = text;
  console.log(1, toChange);
  await Divinity.findOneAndUpdate({ nazwa: znak }, { $pull: toChange })
    .then(async (result) => {
      console.log(2, result);
      toChange[`kategoria.${kategoria}`] = update;
      console.log(3, toChange);
      await Divinity.findByIdAndUpdate(result._id, { $push: toChange })
        .then((result2) => {
          console.log(4, result2);
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log(4, err);
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
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
