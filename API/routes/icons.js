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

router.post("/", async (req, res) => {
  const {
    nazwa,
    Wodnik,
    Ryby,
    Baran,
    Byk,
    Bliźnięta,
    Rak,
    Lew,
    Panna,
    Waga,
    Skorpion,
    Koziorożec,
    Strzelec,
  } = req.body;

  const zestawIkon = new Icons({
    nazwa: nazwa,
    Wodnik: Wodnik,
    Ryby: Ryby,
    Baran: Baran,
    Byk: Byk,
    Bliźnięta: Bliźnięta,
    Rak: Rak,
    Lew: Lew,
    Panna: Panna,
    Waga: Waga,
    Skorpion: Skorpion,
    Koziorożec: Koziorożec,
    Strzelec: Strzelec,
  });

  await zestawIkon.save();
  res.send({
    status: 200,
  });
});

router.delete("/:id", async (req, res) => {
  const zestaw = await Icons.findByIdAndDelete(req.params.id);
  return res.send(zestaw);
});
module.exports = router;
