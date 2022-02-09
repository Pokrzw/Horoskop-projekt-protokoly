const { Schema, model } = require("mongoose");
const Account = require("./Account");

const commentSchema = new Schema(
  {
    author: {
      type: String,
      default : "Anon",
      references: "Account",
    },
    author_name: {
      type: String,
      default : "Anon"
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
    },
    edited: {
      default: false,
      type: Boolean,
    },
  },
  { collection: "comments" }
);

module.exports = model("Comment", commentSchema);
