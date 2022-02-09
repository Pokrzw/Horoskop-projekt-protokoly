const mongoose = require("mongoose");
const HoroskopyData = require("./jsons/horoskopy.json");
const IkonyData = require("./jsons/zestawyIkon.json");
const KontaData = require("./jsons/konta.json");

const Horoskopy = require("./schemas/Divinities");
const Ikony = require("./schemas/IconSet");
const Konta = require("./schemas/Account");

mongoose.connect("mongodb://127.0.0.1:27017/protokolyProjekt", () =>
  console.log("Polonczon z baza danych")
);

(async () => {
  Horoskopy.insertMany(HoroskopyData).then((res) => {
    console.log("Dodano Horoskopy", res.inserted);
  });
})();

(async () => {
  Ikony.insertMany(IkonyData).then((res) => {
    console.log("Dodano Ikony", res.inserted);
  });
})();

(async () => {
  Konta.insertMany(KontaData).then((res) => {
    console.log("Dodano Konta", res.inserted);
  });
})();
