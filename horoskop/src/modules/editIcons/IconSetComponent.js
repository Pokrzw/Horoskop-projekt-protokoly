import "../../styles/editIcons/iconSetComponent.scss";

const IconSetComponent = () => {
  return (
    <div className="IconSetComponent">
      <div className="container">
        <img
          src="https://image.flaticon.com/icons/png/512/47/47038.png"
          alt="Panna"
        />
        <div className="text">
          <div className="title">Zestaw podstawowy</div>
          <div className="descr">
            Podstawowy zestaw ikon dostępny dla każdego.
          </div>
        </div>
      </div>
      <div className="options">
        <button>Wybierz</button>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default IconSetComponent;
