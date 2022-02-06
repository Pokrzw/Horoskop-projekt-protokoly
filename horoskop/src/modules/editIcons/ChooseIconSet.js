import IconSetComponent from "./IconSetComponent";
import "../../styles/editIcons/chooseIconSet.scss";

const ChooseIconSet = () => {
  return (
    <div className="ChooseIconSet">
      <p>Edycja Ikon</p>
      <div className="container">
        <IconSetComponent />
      </div>
    </div>
  );
};

export default ChooseIconSet;
