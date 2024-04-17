import styles from "./chatRoomList.module.css";
import bot from "./Assets/bot.svg";
import botWhite from "./Assets/botWhite.svg";
type Props = {
  chatrooms: any;
  selectedRoom: number;
  onSelectRoom: any;
  channelSelect: string;
  setChannelSelect: any;
};
const ChatroomList = (props: Props) => {
  return (
    <>
      <p>Recent Chat rooms</p>
      <div className={styles["chatroom-list"]}>
        {props.chatrooms
          .slice(0, 3)
          .map((chatroom: { id: number; name: string }) => (
            <div
              key={chatroom.id}
              className={`${styles.chatroom} ${
                props.selectedRoom === chatroom.id &&
                props.channelSelect === "chatRoom"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => props.onSelectRoom(chatroom.id)}
            >
              {chatroom.name}
            </div>
          ))}
      </div>
      <br />
      <p>Game Room</p>
      <div className={styles["chatroom-list"]}>
        <div
          className={`${styles.chatroom} ${
            props.channelSelect === "rps" ? styles.selectedGame : ""
          }`}
          onClick={() => props.setChannelSelect("rps")}
        >
          Rock Paper Scissors
        </div>
        <div
          className={`${styles.chatroom} ${
            props.channelSelect === "mg" ? styles.selectedGame : ""
          }`}
          onClick={() => props.setChannelSelect("mg")}
        >
          Memory Game
        </div>
      </div>
      <div className={styles["chatroom-list"]}>
        <br />
        <br />
        <div
          key="4"
          className={`${styles.chatroom} ${styles.chatroomBot} ${
            props.selectedRoom === 4 && props.channelSelect === "chatRoom"
              ? `${styles.selected} ${styles.selectedBot}`
              : ""
          }`}
          onClick={() => props.onSelectRoom(4)}
        >
          <div className={styles.botRoom}>
            <img
              src={
                props.selectedRoom === 4 && props.channelSelect === "chatRoom"
                  ? botWhite
                  : bot
              }
            />
            <div>Bot Room</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatroomList;
