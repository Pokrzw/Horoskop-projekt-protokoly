const { Schema, model } = require("mongoose");

const accountSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25,
    },
    haslo: {
      type: String,
      required: true,
      minlength: 1,
    },
    zdjecieProfilowe: {
      type: String,
      default: "",
      required: false,
    },
    znak: {
      type: String,
      enum: {
        values: [
          "Wodnik",
          "Ryby",
          "Baran",
          "Byk",
          "Bliźnięta",
          "Rak",
          "Lew",
          "Panna",
          "Waga",
          "Skorpion",
          "Koziorożec",
          "Strzelec",
        ],
      },
    },
    comments: [
      {
        type: String,
        ref: "Comment",
        default: [],
      },
    ],
  },
  { collection: "accounts" }
);

module.exports = model("Account", accountSchema);
