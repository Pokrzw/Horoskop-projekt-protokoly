import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../styles/profile/profileInfo.scss";

function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  const { pattern } = useParams();

  const getByPattern = async (value) => {
    return axios.get(`http://localhost:5000/accounts/search?pattern=${value}`);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      if (pattern) {
        getByPattern(pattern).then((res) => {
          setProfiles(res.data);
        });
      }
    })();
  }, [pattern]);

  return (
    <div className="searchList">
      <ul>
        {profiles.length !== 0 &&
          profiles.map((profile) => {
            return (
              <li className="profile" key={profile.login}>
                <img
                  src={
                    profile.zdjecieProfilowe
                      ? profile.zdjecieProfilowe
                      : "https://solisradius.pl/wp-content/uploads/2021/04/person-icon.png"
                  }
                  alt="zdjecieProfilowe"
                />
                <p className="profileInfo">
                  <h2>{profile.login}</h2>
                  <p>Znak: {profile.znak}</p>
                  <Link to={`/profile/${profile._id}`}>
                    <button>Odwiedź profil</button>
                  </Link>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProfileList;
