import "../styles/mainPage/navBar.scss";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="NavBar">
      <Link to="/">
        <div className="Logo">
          <h1>Mock Logo</h1>
        </div>
      </Link>
      <div className="SearchBar">
        <input type="text" placeholder="Znajdź użytkownika" />
      </div>
      <div className="UserMiniProfile">
        <div className="ProfilePic">
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt=""
          />
        </div>
        <div className="MiniProfileText">
          <p>Witaj, Anon</p>
          <div className="buttons">
            <button
              onClick={() => {
                navigate(`/profile/1`);
              }}
            >
              Profil
            </button>
            <button>Wyloguj</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
