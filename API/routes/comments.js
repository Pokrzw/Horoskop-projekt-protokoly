const express = require("express");
const router = express.Router();

const Comments = require("../schemas/Comments");
const Account = require("../schemas/Account");

router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { content, author, author_name } = req.body;

    const commentToAdd = Comments({author:author, content, author_name})
    await commentToAdd.save().then(async result => {
        const profile = await Account.findById(id);
        
        if(profile){
            await Account.findByIdAndUpdate(id, { $addToSet: {"comments": result._id}})
        }
    })
    .then(() => {res.sendStatus(200)})
    .catch(err => {res.status(400).send(err)})
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if(!id) {return res.sendStatus(400);}

    const result = await Account.findById(id).populate({"path": "comments"})
    res.status(200).send(result);
})

router.patch("/:commentId", async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;
    console.log(commentId, content);
    Comments.findByIdAndUpdate(commentId, {content: content, edited: true})
    .then(() => {res.sendStatus(200)})
    .catch(err => res.status(400).send(err))
});

router.delete("/:commentId", async (req, res) => {
    const { commentId } = req.params;
    const { author } = req.body;
    await Account.findByIdAndUpdate(author, { $pull: {comment: commentId}})
    .then(async () => {
        await Comments.findByIdAndDelete(commentId)
            .then(() => {res.sendStatus(200)})
            .catch(err => res.status(400).send(err))
    })
    .catch(err => {
        res.status(400).send(err);
    })

    
});

module.exports = router;
