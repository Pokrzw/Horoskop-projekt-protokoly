import "../styles/mainPage/navBar.scss";
import "../modules/navBarComponents/LoggedIn";
import "../modules/navBarComponents/LoggedOut";
import { useNavigate, Link } from "react-router-dom";
import LoggedIn from "../modules/navBarComponents/LoggedIn";
import LoggedOut from "../modules/navBarComponents/LoggedOut";
import Cookies from "js-cookie";
import axios from 'axios';

const NavBar = ({ profil, setUser }) => {
  const navigate = useNavigate();
  
  

  return (
    <div className="NavBar">
      <Link to="/">
        <div className="Logo">
          <h1>Zodiakara.net</h1>
        </div>
      </Link>
      <div className="SearchBar">
        <form onSubmit={e => {e.preventDefault(); navigate(`/profile/search/${e.target.firstChild.value}`)}}>
          <input type="text" placeholder="Znajdź użytkownika" />
        </form>
      </div>
      {Cookies.get("sessionID") ? (
        <LoggedIn profil={profil} setUser={setUser} />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
};

export default NavBar;
