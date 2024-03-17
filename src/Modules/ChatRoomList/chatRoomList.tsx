
import React from 'react';
import styles from './chatRoomList.module.css'; // Import CSS module

const ChatroomList = ({ chatrooms, selectedRoom, onSelectRoom }) => {
  return (
    <div className={styles['chatroom-list']}>
      {chatrooms.map(chatroom => (
        <div
          key={chatroom.id}
          className={`${styles.chatroom} ${selectedRoom === chatroom.id ? styles.selected : ''}`}
          onClick={() => onSelectRoom(chatroom.id)}
        >
          {chatroom.name}
        </div>
      ))}
    </div>
  );
};

export default ChatroomList;
