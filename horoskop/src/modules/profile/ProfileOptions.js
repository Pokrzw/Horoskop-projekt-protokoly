import "../../styles/profile/profileOptions.scss";
import { Link } from "react-router-dom";

const ProfileOptions = () => {
  return (
    <div className="ProfileOptions">
      <button>Specjalna przepowiednia</button>
      <Link to="/profile/:id/edit_icons">
        <button>Wybierz/Edytuj zestawy ikon</button>
      </Link>
      <button>Dodaj zestaw ikon</button>
    </div>
  );
};

export default ProfileOptions;
