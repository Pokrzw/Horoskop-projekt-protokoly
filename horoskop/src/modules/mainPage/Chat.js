import Chatter from "./Chatter";
import "../../styles/mainPage/chat.scss";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import mqtt from "mqtt";
import axios from 'axios';

const Chat = ({ profil }) => {
  const [mqttClient, setMqttClient] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = (mqttClient) => {
    const textarea = document.getElementById("chatTextarea");
    const userId = Cookies.get("user-id")
    if (mqttClient) {
      axios.post(`http://localhost:5000/chat/${userId ? userId : "anon"}`, {content: textarea.value});
      mqttClient.publish("chat", `${userId ? userId : "anon"}/${textarea.value}`);
      textarea.value = "";
    } else {
      console.log("Brak MQTT");
    }
  };

  useEffect(() => {(async () => {
      const client = mqtt.connect("ws://127.0.0.1:8082/mqtt");
      client.on("connect", () => {setMqttClient(client);})
      await axios.get("http://localhost:5000/chat").then(res => {setMessages(res.data.map(message => {return [message.author, message.content]}))})
    })()
  }, []);

  useEffect(() => {
    if (mqttClient) {
      mqttClient.subscribe("chat");
      mqttClient.on("message", (t, m) => {
        if (t === "chat") {
          const message = m.toString().split("/");
          setMessages([...messages, message]);
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
              src={
                profil.zdjecieProfilowe
                  ? profil.zdjecieProfilowe
                  : "https://solisradius.pl/wp-content/uploads/2021/04/person-icon.png"
              }
              alt="profilePic"
            />
            <p>{profil.login ? profil.login : "Anon"}</p>
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
          messages.map((message, index) => {
            return <Chatter key={index} message={message} />;
          })}
      </div>
    </div>
  );
};

export default Chat;
