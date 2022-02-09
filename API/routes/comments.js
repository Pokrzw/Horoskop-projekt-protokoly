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

});

router.delete("/:commentId", async (req, res) => {

});

module.exports = router;
