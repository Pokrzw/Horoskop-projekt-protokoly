const express = require("express");
const router = express.Router();

const Chat = require("../schemas/Chat");

router.get("/", async (req, res) => {
    await Chat.find().limit(10).then(result => {res.status(200).send(result)});
});

router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    console.log(id, content);
    if(id !== "anon") {
        const chatLog = Chat({author: id, content: content})
        chatLog.save().then(() => {res.sendStatus(200)}).catch(err => res.status(400).send(err))
    } else {
        const chatLog = Chat({content: content})
        chatLog.save().then(() => {res.sendStatus(200)}).catch(err => res.status(400).send(err))
    }
});

module.exports = router;