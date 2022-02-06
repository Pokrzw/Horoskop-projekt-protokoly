import ProfileOptions from "./ProfileOptions";
import "../../styles/profile/profileInfo.scss";

const ProfileInfo = () => {
  return (
    <div className="ProfileInfo">
      <div className="ProfileBasic">
        <p>Anon</p>
        <img
          className="Profile"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="profilePic"
        />
        <button>Edytuj Profilowe</button>
        <div className="ZnakInfo">
          <p>Znak:</p>
          <img
            src="https://image.flaticon.com/icons/png/512/47/47038.png"
            alt="Panna"
          />
        </div>
      </div>

      <ProfileOptions />
    </div>
  );
};

export default ProfileInfo;
