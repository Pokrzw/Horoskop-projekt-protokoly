import IconOptions from "./editIcons/IconOptions";
import ChooseIconSet from "./editIcons/ChooseIconSet";
import NavBar from "./NavBar";
import "../styles/editIcons/editIcons.scss";

const EditIcons = () => {
  return (
    <div className="EditIcons">
      <div className="buttons">
        <IconOptions />
      </div>
      <div className="ikony">
        <ChooseIconSet />
      </div>
    </div>
  );
};

export default EditIcons;
