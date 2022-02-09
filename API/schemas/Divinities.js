const { Schema, model } = require("mongoose");

const divinitySchema = new Schema(
  {
    nazwa: {
      type: String,
    },
    kategoria: {
      type: Object,
      divinity: {
        type: String,
        required: true,
        minlength: 1,
      },
    },
  },
  { collection: "divinities" }
);

module.exports = model("Divinity", divinitySchema);
