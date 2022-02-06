import Chat from "./mainPage/Chat";
import Divination from "./mainPage/Divination";
import NavBar from './NavBar'

const MainPage = () => {
    return ( 
        <div className="MainPage">
            <NavBar/>
            <Divination/>
            <Chat/>
        </div>
     );
}
 
export default MainPage;