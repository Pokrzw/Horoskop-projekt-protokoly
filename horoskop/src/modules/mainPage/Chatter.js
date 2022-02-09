import "../../styles/mainPage/chatter.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chatter = ({ message }) => {
  const [chatter, setChatter] = useState({});
  useEffect(() => {
    (async () => {
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
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="profilePic"
        />
        <p>{chatter.login}</p>
      </div>
      <div className="chatPopUp">{message[1]}</div>
    </div>
  );
};

export default Chatter;
