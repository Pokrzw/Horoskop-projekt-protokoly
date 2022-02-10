import Chat from "./Chat";
import Divination from "./Divination";
import { useState, useEffect } from "react";
import axios from "axios";

const MainPage = ({ profil }) => {
  const [dailyZodiac, setDailyZodiac] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5000/divinities").then((res) => {
        setDailyZodiac(res.data);
      });
    })();
  }, []);

  return (
    <div className="MainPage">
      <Divination znak={dailyZodiac.znak} przepowiednia={dailyZodiac.wrozba} />
      <Chat profil={profil} />
    </div>
  );
};

export default MainPage;
