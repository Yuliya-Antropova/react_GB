import { useSelector } from 'react-redux';
import { getName } from '../../store/selectors';
import './Message.css';

export const Message = ({ text, author}) => {
    const name = useSelector(getName);
    return (
        <div className="message">
            <div className="message-author">{author !== 'Robot' ? name : author}:</div> 
            <div className="message-text">{text}</div>
        </div>
    )
}