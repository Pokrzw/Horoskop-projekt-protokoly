import "../../styles/mainPage/navBar.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoggedIn = ({ profil, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="LoggedIn">
      <div className="UserMiniProfile">
        <div className="ProfilePic">
          <img
            src={
              profil.zdjecieProfilowe
                ? "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                : "https://solisradius.pl/wp-content/uploads/2021/04/person-icon.png"
            }
            alt="ss"
          />
        </div>
        <div className="MiniProfileText">
          <p>Witaj, {profil.login}</p>
          <div className="buttons">
            <button
              onClick={() => {
                navigate(`profile/${Cookies.get("user-id")}`);
              }}
            >
              Profil
            </button>
            <button
              onClick={() => {
                const cookies = Cookies.get();
                for (const cookie of Object.keys(cookies)) {
                  Cookies.set(cookie, "", { expires: 0 });
                }
                navigate("/login");
                setUser({});
              }}
            >
              Wyloguj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
