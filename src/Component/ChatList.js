import ListGroup from "react-bootstrap/ListGroup";
import "./ChatList.css";
import { AddChat } from "./AddChat";
import { ChatItem } from "./ChatItem";


export const ChatList = ({ chats, onDeleteChat }) => {

  return (
    <ListGroup as="ul" className="chat-list">
      <p className="chat-list-p">Your chats</p>
      {Object.values(chats).map((ch) => (


          <ChatItem 
          name={ch.name}
          key={ch.id}
          id={ch.id}
          text={ch.text}
          onDelete={onDeleteChat}
          />
      ))}
      <ListGroup.Item as="li" className="li-chat">
        <AddChat />
      </ListGroup.Item>
    </ListGroup>
  );
};
