import Chatter from "./Chatter";
import "../../styles/mainPage/chat.scss";
import React, { useState, useEffect } from "react";
import mqtt from "mqtt";

const Chat = () => {
  const [mqttClient, setMqttClient] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = (mqttClient) => {
    const textarea = document.getElementById("chatTextarea");
    if (mqttClient) {
      mqttClient.publish("chat", textarea.value);
      textarea.value = "";
    } else {
      console.log("Brak MQTT");
    }
  };

  useEffect(() => {
    setMqttClient(mqtt.connect("ws://127.0.0.1:8082/mqtt"));
  }, []);

  useEffect(() => {
    if (mqttClient) {
      mqttClient.subscribe("chat");
      mqttClient.on("message", (t, m) => {
        if (t === "chat") {
          const message = m.toString().split("/");
          setMessages([...messages, message]);
          console.log(message);
        }
      });
    }
  }, [mqttClient, messages]);

  return (
    <div className="Chat">
      <h1>Chat</h1>
      <div className="writeYourMessage">
        <p>Napisz swoją wiadomość</p>
        <div className="textContainer">
          <div className="profileData">
            <img
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              alt="profilePic"
            />
            <p>Anon</p>
          </div>
          <textarea
            name="comment"
            cols="30"
            rows="10"
            placeholder="Tutaj napisz swój komentarz"
            id="chatTextarea"
          ></textarea>
        </div>
        <button
          onClick={() => {
            sendMessage(mqttClient);
          }}
        >
          Wyślij
        </button>
      </div>
      <div className="actualChatContainer">
        {messages.length !== 0 &&
          messages.map((message) => {
            return <Chatter message={message[0]} />;
          })}
      </div>
    </div>
  );
};

export default Chat;
