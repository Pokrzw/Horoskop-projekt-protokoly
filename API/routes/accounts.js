const express = require("express");
const router = express.Router();
const argon2 = require("argon2");

const Account = require("../schemas/Account");

const sessions = new Set();

router.get("/", async (req, res) => {
  const allAccounts = await Account.find();
  return res.send(allAccounts);
});

router.get("/search", async (req, res) => {
  const { pattern } = req.query;
  const result = await Account.find({
    login: { $regex: pattern, $options: "i" },
  });
  res.send(result);
});

router.post("/register", async (req, res) => {
  const { login, haslo, znak } = req.body;
  let hash = undefined;

  try {
    hash = await argon2.hash(haslo);
  } catch (err) {
    console.log(err);
  }

  const user = new Account({
    login: `${login}`,
    haslo: `${hash}`,
    znak: `${znak}`,
  });
  await user.save();
  return res.send(req.body);
});

router.post("/login", async (req, res) => {
  const { login, haslo } = req.body;
  const userToLogIn = await Account.find({ login: `${login}` });

  if (userToLogIn.length === 0) {
    res.status(400).send("User doesn't exist");
    return;
  }
  if (await argon2.verify(userToLogIn[0].haslo, haslo)) {
    const sessionID = `${parseInt(
      Math.random() * 10_000_000_000_000
    )}-${login}`;
    sessions.add(sessionID);
    res.status(200).send({ sessionID, user_id: userToLogIn[0]._id });
  } else {
    res.status(400).send("Wrong password");
  }
  return;
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id && id.length !== 0) {
    const allAccounts = await Account.find({ _id: id });
    return res.send(allAccounts[0]);
  } else res.sendStatus(400);
  return;
});

router.delete("/:id", async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  return res.send(account);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const account = await Account.findByIdAndUpdate(id, {
    zdjecieProfilowe: req.body.zdjecieProfilowe,
  }).then((x) => {
    console.log(x);
  });
  return res.send(account);
});

module.exports = router;
