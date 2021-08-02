import './Message.css';

export const Message = ({ text, author}) => {
    return (
        <div className="message">
            <div className="message-author">{author}:</div> 
            <div className="message-text">{text}</div>
        </div>
    )
}