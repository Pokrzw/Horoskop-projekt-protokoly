import ProfileInfo from "./profile/ProfileInfo";
import NavBar from "./NavBar";
import ProfileOptions from "./profile/ProfileOptions";

const Profile = () => {
    return ( 
        <div className="Profile">
            <NavBar/>
            <ProfileInfo/>
            <ProfileOptions/>
        </div>
     );
}
 
export default Profile;