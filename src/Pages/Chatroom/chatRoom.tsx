import React, { useState } from 'react';
import ChatroomList from '../../Modules/ChatRoomList/chatRoomList';
import MainChatroom from '../../Modules/ChatRoomMain/chatRoomMain';

const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // State to store the ID of the selected chatroom

  // Sample chatroom data
  const chatrooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' },
  ];

  const handleSelectRoom = roomId => {
    setSelectedRoom(roomId);
  };

  return (
    <div>
      <ChatroomList 
              chatrooms={chatrooms}
              selectedRoom={selectedRoom}
              onSelectRoom={handleSelectRoom}/>
      <MainChatroom/>
    </div>
  );
};

export default App;
