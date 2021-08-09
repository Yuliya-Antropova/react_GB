import { useCallback } from "react";
import { Message } from "./Message";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'

export const MessageList = ({ messages }) => {
    
    const renderMessage = useCallback((mess) => (
        <Message author = {mess.author} text={mess.text} key={mess.id}/>
    ), []);

    return messages.map(renderMessage);
};

