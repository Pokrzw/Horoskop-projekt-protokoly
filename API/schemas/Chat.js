const { Schema, model } = require("mongoose");
const Account = require("./Account");

const chatSchema = new Schema(
  {
    author: {
      type: String,
      default: "",
      references: "Account",
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
    }
  },
  { collection: "chat" }
);

module.exports = model("Chat", chatSchema);
