import { useCallback } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'
import { Message } from "./Message/Message";

export const MessageList = ({ messages }) => {
    
    const renderMessage = useCallback((mess) => (
        <Message author = {mess.author} text={mess.text} key={mess.id}/>
    ), []);

    return messages.map(renderMessage);
};

