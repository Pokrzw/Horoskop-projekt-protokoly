import ProfileOptions from "./ProfileOptions";
import "../../styles/profile/profileInfo.scss";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const ProfileInfo = ({ profil, setUser }) => {
  const navigate = useNavigate();
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
          src={
            profil.zdjecieProfilowe
              ? profil.zdjecieProfilowe
              : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          }
          alt="profilePic"
        />
        <button>Edytuj Profilowe</button>
        <div className="ZnakInfo">
          <p>Znak:</p>
          <img
            src={
              profil.znak
                ? znaki[profil.znak]
                : "https://image.flaticon.com/icons/png/512/47/47038.png"
            }
            alt={profil.znak ? znaki[profil.znak] : "Panna"}
          />
        </div>
      </div>
      <Formik
        initialValues={{
          login: "",
        }}
        onSubmit={async (values) => {
          axios
            .put(`http://localhost:5000/accounts/${profil._id}`, values)
            .then((x) => {
              profil.login = values.login;
            });
        }}
      >
        <Form>
          <Field name="login" type="text"></Field>
          <button type="submit">Zmień nazwe</button>
        </Form>
      </Formik>

      <button
        onClick={() => {
          axios
            .delete(`http://localhost:5000/accounts/${profil._id}`)
            .then((x) => {
              const cookies = Cookies.get();
              for (const cookie of Object.keys(cookies)) {
                Cookies.set(cookie, "", { expires: 0 });
              }
              navigate("/login");
              setUser({});
            });
        }}
      >
        Usuń profil
      </button>
      <ProfileOptions />
    </div>
  );
};

export default ProfileInfo;
