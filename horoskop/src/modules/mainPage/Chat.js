import Chatter from "./Chatter";
import "../../styles/mainPage/chat.scss"

const Chat = () => {
    return ( 
        <div className="Chat">
            <h1>Chat</h1>
                <div className="writeYourMessage">
                    <p>Napisz swoją wiadomość</p>
                    <div className="textContainer">
                    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" />
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="actualChatContainer">
                    a
                    <Chatter/>
                </div>
        </div>
     );
}
 
export default Chat;