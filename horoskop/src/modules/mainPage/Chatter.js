import "../../styles/mainPage/chatter.scss";

const Chatter = ({ message }) => {
  return (
    <div className="Chatter">
      <div className="usersProfile">
        <img
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="profilePic"
        />
        <p>user123</p>
      </div>
      <div className="chatPopUp">{message}</div>
    </div>
  );
};

export default Chatter;
