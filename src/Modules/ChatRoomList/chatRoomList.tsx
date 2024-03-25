import styles from './chatRoomList.module.css';
type Props = {
  chatrooms: any
  selectedRoom: null
  onSelectRoom: any
}
const ChatroomList = (props: Props) => {
  return (
    <div className={styles['chatroom-list']}>
      {props.chatrooms.map((chatroom: { id: number;name: string }) => (
        <div
          key={chatroom.id}
          className={`${styles.chatroom} ${props.selectedRoom === chatroom.id ? styles.selected : ''}`}
          onClick={() => props.onSelectRoom(chatroom.id)}
        >
          {chatroom.name}
        </div>
      ))}
    </div>
  );
};

export default ChatroomList;
