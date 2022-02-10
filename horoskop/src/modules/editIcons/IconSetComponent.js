import "../../styles/editIcons/iconSetComponent.scss";
import axios from "axios";

const IconSetComponent = ({ icon }) => {
  return (
    <div className="IconSetComponent">
      <div className="container">
        <img src={icon.Panna} alt="Panna" />
        <div className="text">
          <div className="title">{icon.nazwa}</div>
        </div>
      </div>
      <div className="options">
        <button>Wybierz</button>
        {icon.nazwa !== "Zestaw Podstawowy" && <input type="checkbox" /> && (
            <button>Edytuj</button>
          ) && (
            <button
              onClick={async () => {
                await axios
                  .delete(`http://localhost:5000/icons/${icon._id}`)
                  .then(() => window.location.reload(false));
              }}
            >
              Usuń
            </button>
          )}
      </div>
    </div>
  );
};

export default IconSetComponent;
