const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const accountsRoute = require("./routes/accounts");
const divinitiesRoute = require("./routes/divinities");
const iconsRoute = require("./routes/icons");

app.use(express.json());
const cors_rules = {
  origin: "http://localhost:3000",
};
app.use(cors(cors_rules));
app.use("/accounts", accountsRoute);
app.use("/divinities", divinitiesRoute);
app.use("/icons", iconsRoute);

mongoose.connect("mongodb://127.0.0.1:27017/protokolyProjekt", () =>
  console.log("Polonczon z baza danych")
);

app.listen(5000);
