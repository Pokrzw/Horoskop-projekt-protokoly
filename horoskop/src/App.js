import MainPage from "./modules/mainPage/MainPage";
import Profile from "./modules/profile/Profile";
import EditIcons from "./modules/editIcons/EditIcons";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import LoginForm from "./modules/login/LoginForm";
import axios from "axios";
import Cookies from "js-cookie";
import ProfileList from './modules/profile/ProfileList';
import IconAdd from './modules/editIcons/IconAdd';

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      if (Cookies.get("user-id")) {
        await axios
          .get(`http://localhost:5000/accounts/${Cookies.get("user-id")}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch(err => {});
      } else {
        setUser({});
      }
    })();
  }, []);

  return (
    <div className="App">
      <NavBar profil={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<MainPage profil={user} />} />
        <Route path="profile">
          <Route path=":id" element={<Profile profil={user}/>} />
          <Route path=":id/edit_icons" element={<EditIcons profil={user}/>} />
          <Route path="search/" element={<ProfileList />}/>
          <Route path="search/:pattern" element={<ProfileList />}/>
        </Route>
        <Route path="/icons/add" element={<IconAdd />} />
        <Route path="register" element={<LoginForm register={true} />} />
        <Route
          path="login"
          element={<LoginForm register={false} setUser={setUser} />}
        />
        
      </Routes>
    </div>
  );
}

export default App;
