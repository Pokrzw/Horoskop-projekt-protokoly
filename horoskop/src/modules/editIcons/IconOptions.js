import { useNavigate } from "react-router-dom";
import "../../styles/editIcons/iconOptions.scss";

const IconOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="iconOptions">
      <button onClick={() => {navigate("/icons/add")}}>Dodaj</button>
      <button>Usuń</button>
    </div>
  );
};

export default IconOptions;
