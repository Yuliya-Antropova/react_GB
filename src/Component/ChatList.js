import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './ChatList.css'

export const ChatList = ({ chats }) => {

   
    
    return ( 
        <ListGroup as="ul" className="chat-list">
            <p className="chat-list-p">Your chats</p>
            <ListGroup.Item as="li" className="li-chat" key={chats.id}>
                {Object.values(chats).map((chats) => (
                    <NavLink to={`/home/${chats.id}`}  activeClassName="chat-active">{chats.name} {chats.text} </NavLink>
                ))}
            </ListGroup.Item>            
        </ListGroup>
        )
}




