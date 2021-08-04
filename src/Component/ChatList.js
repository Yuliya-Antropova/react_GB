import { Chat } from './Chat';

import ListGroup from 'react-bootstrap/ListGroup';
import './ChatList.css'

export const ChatList = (props) => {

    // const [chatList, setMessageList] = useState([]);

    const chatList = [
            {author: 'Yulya', text: 'Hi', id: Math.random()},
            {author: 'Misha', text: 'Hello', id: Math.random()},
            {author: 'Vlad', text: 'Whats up?', id: Math.random()},
            {author: 'Katya', text: 'I am there', id: Math.random()},
        ];
    return ( 
        <ListGroup as="ul" className="chat-list">
            <p className="chat-list-p">Your chats</p>
            {chatList.map((chats) => (
                <Chat author = {chats.author} text={chats.text} key={chats.id}/>
            ))}
        </ListGroup>
        )
}




