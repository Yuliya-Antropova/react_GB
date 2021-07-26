import './Message.css';

export const Message = (props) => {
    return (
        <div className="message">
            <p className="message-text">
                Это сообщение для Вас, {props.name}
            </p>
        </div>
    )
}