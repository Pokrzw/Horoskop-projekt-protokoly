import axios from "axios";
import { useEffect, useState } from "react";

const CustomDivination = ({ profil }) => {
  const [getData, setGetData] = useState(null);
  const [kategoria, setKategoria] = useState("");

  useEffect(() => {
    if (kategoria === "") return;
    console.log({
      znak: profil.znak,
      kategoria: kategoria,
    });
    axios
      .get(`http://localhost:5000/divinities/${kategoria}/${profil.znak}`)
      .then((data) => setGetData(data.data.wrozba));
  }, [kategoria]);

  return (
    <div className="customDivination">
      <label for="divination">Wybierz kategorie przepowiedni:</label>
      <select
        onChange={(e) => setKategoria(e.target.value)}
        name="divination"
        id="divination"
      >
        <option value="">Wybierz opcję</option>
        <option value="kariera">kariera</option>
        <option value="zdrowie">zdrowie</option>
        <option value="relacje">relacje</option>
      </select>

      <div className="resultText">{getData ? getData : ""}</div>
    </div>
  );
};

export default CustomDivination;
