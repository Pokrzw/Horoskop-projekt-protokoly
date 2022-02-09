import ProfileOptions from "./ProfileOptions";
import "../../styles/profile/profileInfo.scss";

const ProfileInfo = ({profil}) => {
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
    <div className="ProfileInfo">
      <div className="ProfileBasic">
        <p>{profil.login ? profil.login : "Anon"}</p>
        <img
          className="Profile"
          src={profil.zdjecieProfilowe ? profil.zdjecieProfilowe : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"}
          alt="profilePic"
        />
        <button>Edytuj Profilowe</button>
        <div className="ZnakInfo">
          <p>Znak:</p>
          <img
            src={profil.znak ? znaki[profil.znak] : "https://image.flaticon.com/icons/png/512/47/47038.png"}
            alt={profil.znak ? znaki[profil.znak] : "Panna"}
          />
        </div>
      </div>
      <form>
        <input></input>
        <button>Zmień nazwe</button>
      </form>
      <button>Usuń profil</button>
      <ProfileOptions />
    </div>
  );
};

export default ProfileInfo;
