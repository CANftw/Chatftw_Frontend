import React, { useState, useRef, useEffect } from 'react';
import styles from './chatRoomMain.module.css';

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

  return (
    <div className={styles.chatRoom}>
      <div className={styles.messageContainer}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={styles.message}>
              {index === 0 || messages[index - 1].sender !== message.sender ? (
                <div className={styles.sender} style={{ color: getColorForUser(message.sender) }}>
                  {message.sender === 'You' ? '~sourav(Me)' : `~${message.sender}`}
                </div>
              ) : null}
              <div className={message.sender}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button onClick={handleMessageSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
