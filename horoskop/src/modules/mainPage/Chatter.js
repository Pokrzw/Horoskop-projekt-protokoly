import "../../styles/mainPage/chatter.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chatter = ({ message }) => {
  const [chatter, setChatter] = useState({});
  useEffect(() => {
    (async () => {
      if(message[0] !== "anon")
      await axios
        .get(`http://localhost:5000/accounts/${message[0]}`)
        .then((res) => {
          setChatter(res.data);
        });
    })();
  }, []);

  return (
    <div className="Chatter">
      <div className="usersProfile">
        <img
          src={chatter.zdjecieProfilowe ? chatter.zdjecieProfilowe : "https://solisradius.pl/wp-content/uploads/2021/04/person-icon.png"}
          alt="profilePic"
        />
        <p>{chatter.login || "Anon"}</p>
      </div>
      <div className="chatPopUp">{message[1]}</div>
    </div>
  );
};

export default Chatter;
