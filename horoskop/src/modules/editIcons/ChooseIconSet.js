import IconSetComponent from "./IconSetComponent";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/editIcons/chooseIconSet.scss";

const ChooseIconSet = () => {
  const [icons, setIcons] = useState();
  useEffect(() => {(async () => {
    if(!icons){
      axios.get("http://localhost:5000/icons/").then(res => {
        setIcons(res.data.all);
      })
    }
  })()}, [icons]);
  return (
    <div className="ChooseIconSet">
      <p>Edycja Ikon</p>
      <div className="container">
        {icons && icons.map((icon, index )=> {
          return (<IconSetComponent key={index} icon={icon}/>)
        })}
        
      </div>
    </div>
  );
};

export default ChooseIconSet;
