import '../styles/mainPage/navBar.scss'

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <div className="Logo">
                <h1>Mock Logo</h1>
            </div>
            <div className="SearchBar">
                <input type="text" placeholder='Znajdź użytkownika' />
            </div>
            <div className="UserMiniProfile">
                <div className="ProfilePic">
                    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" />
                </div>
                <div className="MiniProfileText">
                    <p>Witaj, Anon</p>
                    <div className="buttons">
                        <button>Profil</button>
                        <button>Wyloguj</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;