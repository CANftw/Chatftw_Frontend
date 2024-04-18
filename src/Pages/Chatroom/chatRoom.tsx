import ChatRoom from "../../Modules/ChatRoomMain/chatRoomMain";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Chatroom = () => {
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      // Redirect to login if there's no access token
      window.history.replaceState(null, "", "/login");
    }
  }, [accessToken, location]);

  return (
    <ChatRoom/>
  );
};

export default Chatroom;
