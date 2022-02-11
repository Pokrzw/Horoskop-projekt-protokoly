import ProfileInfo from "./ProfileInfo";
import ProfileComments from "./ProfileComments";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ profil, setUser }) => {
  const [curProf, setCurProf] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/accounts/${id}`)
      .then((x) => setCurProf(x.data));
  }, []);

  return (
    <div className="Profile">
      <ProfileInfo profil={curProf} setUser={setCurProf} />
      <ProfileComments id={id} profil={curProf} />
    </div>
  );
};

export default Profile;
