import ProfileInfo from "./ProfileInfo";
import NavBar from "../NavBar";
import ProfileComments from './ProfileComments';
import { useParams } from 'react-router-dom';

const Profile = ({profil}) => {
  const { id } = useParams();
  return (
    <div className="Profile">
      <ProfileInfo profil={profil}/>
      <ProfileComments id={id} profil={profil}/>
    </div>
  );
};

export default Profile;
