import React, { useState, useRef, useEffect } from 'react';
import styles from './chatRoomMain.module.css';
import send from "./Assets/Vector.svg";
import smiley from "./Assets/smiley.svg";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "Rohan" },
    { text: "Hi there!", sender: "Don" },
    { text: "How are you?", sender: "Don" },
    { text: "I'm good, thanks!", sender: "You" },
    { text: "OKay!", sender: "Reo" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getColorForUser = (username) => {
    const colors = ['#FF2F2F', '#5519FF', '#1922FF', '#1993FF'];
    const index = username.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'You',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

    const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <>
      
      <div className={styles.top}>
        <div className={styles.toplogo}>
          <div className={styles.topLogoname}>Hermesphere</div>
          <div className={styles.topLogoSub}>Speak freely</div>
        </div>
        <div className={styles.topNum}>69K+<span>online</span></div>
    </div>
    <div className={styles.chatRoom}>
      <div className={styles.chatRoomContainer}>
        <div className={styles.chatRoomContainerInner}>
          {messages.map((message, index) => (
            <div key={index} className={styles.chatRoomContainerInnerMessage}>
              {index === 0 || messages[index - 1].sender !== message.sender ? (
                <div className={styles.chatRoomContainerInnerMessageSender} style={{ color: getColorForUser(message.sender) }}>
                  {message.sender === 'You' ? 'sourav(Me)' : `${message.sender}`}
                </div>
              ) : null}
              <div className={styles.chatRoomContainerInnerMessageText}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={styles.chatRoomChatbox}>
        <div className={styles.chatRoomChatboxSendbutton}><img src={smiley}/></div>
        <input
          type="text"
          value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className={styles.chatRoomChatboxInput}/>
        <button onClick={handleMessageSend} className={styles.chatRoomChatboxSendbutton}>
          <img src={send} />
        </button>
      </div>
    </div>
    </>
  );
};

export default ChatRoom;
