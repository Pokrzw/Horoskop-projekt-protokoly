import "../../styles/editIcons/iconSetComponent.scss";

const IconSetComponent = ({icon}) => {
  return (
    <div className="IconSetComponent">
      <div className="container">
        <img
          src={icon.Panna}
          alt="Panna"
        />
        <div className="text">
          <div className="title">{icon.nazwa}</div>
        </div>
      </div>
      <div className="options">
        <button>Wybierz</button>
        {icon.nazwa !== "Zestaw Podstawowy" && <input type="checkbox" /> && <button>Edytuj</button>}
      </div>
    </div>
  );
};

export default IconSetComponent;
