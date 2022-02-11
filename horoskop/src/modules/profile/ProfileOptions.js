import "../../styles/profile/profileOptions.scss";
import { Link } from "react-router-dom";

const ProfileOptions = () => {
  return (
    <div className="ProfileOptions">
      <Link to="/profile/:id/customDivination">
        <button>Specjalna przepowiednia</button>
      </Link>

      <Link to="/profile/:id/edit_icons">
        <button>Wybierz/Edytuj zestawy ikon</button>
      </Link>

      <Link to="/profile/:id/edit_divinations">
        <button>Edytuj przepowiednie dla swojego znaku</button>
      </Link>
    </div>
  );
};

export default ProfileOptions;
