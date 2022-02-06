import MainPage from "./modules/MainPage";
import Profile from "./modules/Profile";
import EditIcons from "./modules/EditIcons";
import { Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit_icons" element={<EditIcons />} />
      </Routes>
    </div>
  );
}

export default App;
