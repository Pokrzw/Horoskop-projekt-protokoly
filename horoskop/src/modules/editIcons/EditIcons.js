import IconOptions from "./IconOptions";
import ChooseIconSet from "./ChooseIconSet";
import "../../styles/editIcons/editIcons.scss";

const EditIcons = ({profil}) => {
  return (
    <div className="EditIcons">
      <div className="buttons">
        {profil.admin && <IconOptions />}
      </div>
      <div className="ikony">
        <ChooseIconSet />
      </div>
    </div>
  );
};

export default EditIcons;
