import { useState, useRef, useEffect, SetStateAction } from "react";
import styles from "./chatRoomMain.module.css";
import send from "./Assets/Vector.svg";
import smiley from "./Assets/smiley.svg";
import ChatroomList from "../ChatRoomList/chatRoomList";
import BackBtn from "../Button/backBtn";
import RockPaperScissors from "../MiniGames/RockPaperScissors/rockPaperScissors";
import TicTacToe from "../MiniGames/TicTacToe/ticTacToe";

const ChatRoom = () => {
  const [chatrooms] = useState([
    { id: 1, name: "General" },
    { id: 2, name: "Random" },
    { id: 3, name: "Tech Talk" },
    // Add more chatrooms as needed
  ]);

  // State for selected room
  const [selectedRoom, setSelectedRoom] = useState(2);
  const [channelSelect, setChannelSelect] = useState("chatRoom");

  // Function to handle selecting a room
  const onSelectRoom = (roomId: SetStateAction<null>) => {
    setChannelSelect("chatRoom");
    setSelectedRoom(roomId);
    // Additional logic if needed
  };

  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "Rohan" },
    { text: "Hi there!", sender: "Don" },
    { text: "How are you?", sender: "Don" },
    { text: "I'm good, thanks!", sender: "You" },
    { text: "OKay!", sender: "Reo" },
  ]);
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

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        sender: "You",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
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
                  {message.sender === "You"
                    ? "sourav(Me)"
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
  } else if (channelSelect == "ttt") {
    mainSection = <TicTacToe />;
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerBack}>
          <BackBtn name="Back" />
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
