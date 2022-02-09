const { Schema, model } = require("mongoose");

const iconSetSchema = new Schema(
  {
    nazwa: {
      type: String,
      required: true,
    },
    Wodnik: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Ryby: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Baran: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Byk: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Bliżnięta: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Rak: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Lew: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Panna: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Waga: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Skorpion: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Koziorożec: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
    Strzelec: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(v);
        },
        message: (props) => `${props.value} is not a valid image file`,
      },
    },
  },
  { collection: "iconSets" }
);

module.exports = model("IconSet", iconSetSchema);
