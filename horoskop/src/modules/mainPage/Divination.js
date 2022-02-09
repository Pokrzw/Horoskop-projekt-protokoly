import React, { useState, useEffect } from "react";
import "../../styles/mainPage/divination.scss";

const Divination = ({ znak, przepowiednia }) => {
  const znaki = {
    Wodnik:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_aquarius.png",
    Ryby: "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_pisces.png",
    Baran:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_aries.png",
    Byk: "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_taurus.png",
    Bliźnięta:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_gemini.png",
    Rak: "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_cancer.png",
    Lew: "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_leo.png",
    Panna: "https://emagia.pl/wp-content/uploads/2020/03/panna.png",
    Waga: "https://emagia.pl/wp-content/uploads/2020/03/waga-yellow.png",
    Skorpion:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_scorpio.png",
    Koziorożec:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_capricorn.png",
    Strzelec:
      "https://emagia.pl/wp-content/uploads/2020/03/horoscopenew_yellow_sagittarius.png",
  };

  return (
    <div className="Divination">
      <div className="symbol">
        {/* {signImage} */}
        <img src={znaki[znak]} alt={znak} />
      </div>
      <div className="divinationText">
        <p>Znak Dnia</p>
        <p className="sign">{znak}</p>
        <p className="text">{przepowiednia}</p>
      </div>
    </div>
  );
};

export default Divination;
