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
              : "https://solisradius.pl/wp-content/uploads/2021/04/person-icon.png"
          }
          alt="profilePic"
        />
        {Cookies.get("user-id") === profil._id && (
          <Formik
            initialValues={{
              zdjecieProfilowe: profil.zdjecieProfilowe,
            }}
            onSubmit={async (values) => {
              axios
                .put(`http://localhost:5000/accounts/${profil._id}`, values)
                .then((x) => {
                  profil.zdjecieProfilowe = values.zdjecieProfilowe;
                });
            }}
          >
            <Form className="form1">
              <Field name="zdjecieProfilowe" type="text"></Field>
              <button type="submit">Edytuj Profilowe</button>
            </Form>
          </Formik>
        )}
        <div className="ZnakInfo">
          <p>Znak:</p>
          <img
            src={profil.znak ? znaki[profil.znak] : ""}
            alt={profil.znak ? znaki[profil.znak] : ""}
          />
        </div>
      </div>

      {Cookies.get("user-id") === profil._id && (
        <div className="deleteButton">
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
        </div>
      )}

      {Cookies.get("user-id") === profil._id && <ProfileOptions />}
    </div>
  );
};

export default ProfileInfo;
