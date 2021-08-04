import ListGroup from 'react-bootstrap/ListGroup';
import './Chat.css'

export const Chat = ({ author, text }) => {
    
    return (
            <ListGroup.Item as="li" className="li-chat"> 
                <div>{author}:</div> 
                <div className="li-chat-text">
                    {text}
                </div> 
            </ListGroup.Item>


        // <div className="message">
        //     <div className="message-author">{author}:</div> 
        //     <div className="message-text">{text}</div>
        // </div>
    )
}