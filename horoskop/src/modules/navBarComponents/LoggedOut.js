import "../../styles/mainPage/navBar.scss";
import { useNavigate } from "react-router";

const LoggedOut = () => {
  const navigate = useNavigate();
  return (
    <div className="LoggedOut">
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Załóż konto
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Zaloguj się
      </button>
    </div>
  );
};

export default LoggedOut;
