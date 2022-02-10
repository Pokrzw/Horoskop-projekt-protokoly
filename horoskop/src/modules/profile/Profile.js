import ProfileInfo from "./ProfileInfo";
import ProfileComments from "./ProfileComments";
import { useParams } from "react-router-dom";

const Profile = ({ profil, setUser }) => {
  const { id } = useParams();
  return (
    <div className="Profile">
      <ProfileInfo profil={profil} setUser={setUser} />
      <ProfileComments id={id} profil={profil} />
    </div>
  );
};

export default Profile;
