import MainPage from "./modules/MainPage";
import Profile from "./modules/Profile";
import EditIcons from "./modules/EditIcons";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import LoginForm from "./modules/login/LoginForm";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      if (Cookies.get("user-id")) {
        await axios
          .get(`http://localhost:5000/accounts/${Cookies.get("user-id")}`)
          .then((res) => {
            console.log(res.data);
            setUser(res.data);
          });
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
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit_icons" element={<EditIcons />} />
        <Route path="/register" element={<LoginForm register={true} />} />
        <Route
          path="/login"
          element={<LoginForm register={false} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
