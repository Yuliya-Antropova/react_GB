import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export const ChatItem = ({id, name, text, onDelete}) => {
    const handleDelete = () => {
      onDelete(id);
    };

  return (
      <ListGroup.Item as="li" className="li-chat">
        <NavLink to={`/home/${id}`} activeClassName="chat-active">
          {name} {text}
        </NavLink>
        <button onClick={handleDelete}>Delete chat</button>
      </ListGroup.Item>
  );
};
