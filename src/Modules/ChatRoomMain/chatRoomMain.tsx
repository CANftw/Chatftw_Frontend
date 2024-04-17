import { useState, useRef, useEffect } from "react";
import styles from "./chatRoomMain.module.css";
import send from "./Assets/Vector.svg";
import smiley from "./Assets/smiley.svg";
import ChatroomList from "../ChatRoomList/chatRoomList";
import BackBtn from "../Button/backBtn";
import RockPaperScissors from "../MiniGames/RockPaperScissors/rockPaperScissors";
import MemoryGame from "../MiniGames/MemoryGame/memoryGame";

import { socket } from "./socket";
import { useNavigate } from "react-router";


interface Message {
  text: string;
  sender: string;
}

const ChatRoom = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [chatrooms] = useState([
    { id: 1, name: "General" },
    { id: 2, name: "Random" },
    { id: 3, name: "Tech Talk" },
    { id: 4, name: "Bot Room" },
  ]);

  // State for selected room
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [channelSelect, setChannelSelect] = useState("chatRoom");
  const [randomName, setRandomName] = useState("");

  // Function to handle selecting a room
  const onSelectRoom = (roomId: number) => {
    setChannelSelect("chatRoom");
    setSelectedRoom(roomId);
    roomId == 1
      ? setMessages(general)
      : roomId == 2
        ? setMessages(random)
        : roomId == 3
          ? setMessages(techTalk)
          : roomId == 4
            ? setMessages(botRoom)
            : "";
    // Additional logic if needed
  };
  const [general, setGeneral] = useState([
    { text: "Hello!", sender: "Rohan" },
    { text: "Hi there!", sender: "Don" },
    { text: "How are you?", sender: "Don" },
    { text: "I'm good, thanks!", sender: "You" },
    { text: "OKay!", sender: "Reo" },
  ]);
  const [random, setRandom] = useState([
    { text: "Hellooooo", sender: "You" },
    { text: "hey,wanna play minecraft", sender: "Don" },
    { text: "I am in..", sender: "Blaze" },
    { text: "Me too", sender: "You" },
    { text: "Let's go...", sender: "Reo" },
  ]);
  const [techTalk, setTechTalk] = useState([
    { text: "Hola", sender: "Jaggu" },
    { text: "React++", sender: "Don" },
    { text: "No way", sender: "Blaze" },
    { text: "Lol!", sender: "You" },
    { text: "very funny...", sender: "Reo" },
  ]);
  const botRoom = [
    { text: "Hello", sender: "You" },
    { text: "Hi!How can I help you today?", sender: "Bot" },
  ];
  const [messages, setMessages] = useState(general);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getColorForUser = (username: string) => {
    const colors = ["#FF2F2F", "#5519FF", "#1922FF", "#1993FF"];
    const index = username.charCodeAt(0) % colors.length;
    return colors[index];
  };
  const generateRandomName = () => {
    // List of possible names
    const names = ['John', 'Alice', 'Bob', 'Emma', 'Mike', 'Sarah', 'David', 'Emily'];

    // Select a random name from the list
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    // Combine the random name and number
    const combinedName = randomName + randomNumber;

    return combinedName;
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        sender: randomName,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      socket.emit("message", chatrooms[selectedRoom - 1].name, randomName, inputValue);

    }
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  };
  let mainSection;
  if (channelSelect == "chatRoom") {
    mainSection = (
      <div className={styles.chatRoom}>
        <div className={styles.chatRoomContainer}>
          {messages.map((message, index) => (
            <div key={index} className={styles.chatRoomContainerMessage}>
              {index === 0 || messages[index - 1].sender !== message.sender ? (
                <div
                  className={styles.chatRoomContainerMessageSender}
                  style={{ color: getColorForUser(message.sender) }}
                >
                  {message.sender === randomName
                    ? `${randomName} (Me)`
                    : `${message.sender}`}
                </div>
              ) : null}
              <div className={styles.chatRoomContainerMessageText}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.chatRoomChatbox}>
          <div className={styles.chatRoomChatboxSendbutton}>
            <img src={smiley} />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className={styles.chatRoomChatboxInput}
          />
          <button
            onClick={handleMessageSend}
            className={styles.chatRoomChatboxSendbutton}
          >
            <img src={send} />
          </button>
        </div>
      </div>
    );
  } else if (channelSelect == "rps") {
    mainSection = <RockPaperScissors />;
  } else if (channelSelect == "mg") {
    mainSection = <MemoryGame />;
  }

  socket.on("message", (room, user, message) => {
    if (room === chatrooms[selectedRoom - 1].name) {
      setMessages([...messages, { text: message, sender: user }]);
    }
  })

  useEffect(() => {
    setRandomName(generateRandomName());
    const handleBeforeUnload = () => {
      socket.disconnect();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);

    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerBack}>
          <BackBtn name="close" onClick={handleBackBtnClick} />
        </div>
        <div className={styles.headerTop}>
          <div className={styles.headerToplogo}>
            <div className={styles.headerTopLogoname}>Hermesphere</div>
            <div className={styles.headerTopLogoSub}>Speak freely</div>
          </div>
          <div className={styles.headerTopNum}>
            69K+<span>online</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.list}>
          <ChatroomList
            chatrooms={chatrooms}
            selectedRoom={selectedRoom}
            onSelectRoom={onSelectRoom}
            channelSelect={channelSelect}
            setChannelSelect={setChannelSelect}
          />
        </div>
        {mainSection}
      </div>
    </>
  );
};

export default ChatRoom;
