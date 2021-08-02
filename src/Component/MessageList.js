import { useEffect, useRef, useState } from "react";
import { Message } from "./Message";

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'


export const MessageList = (props) => {

    // const authorsMess = [
    //     {author: 'Yulya', text: 'Hi', id: Math.random()},
    //     {author: 'Misha', text: 'Hello', id: Math.random()},
    //     {author: 'Vlad', text: 'Whats up?', id: Math.random()},
    //     {author: 'Katya', text: 'I am there', id: Math.random()},
    // ]
    
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
            const robotMess = { author: 'Robot', text: 'Hello, i am Robot, nice to meet you', id: Math.random() };
            setTimeout(() => {
               setMessageList([...messageList, robotMess]); 
            }, 1000);
            
        }
    }, [messageList]);

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        const newMessage = { author: 'Yulya', text: value, id: Math.random() }; 
        setMessageList([...messageList, newMessage]);
        setValue('');
        e.preventDefault();
        
    }

    const inputAutofocus = useRef(null);
    useEffect(() => {
        if (inputAutofocus.current) {
            inputAutofocus.current.focus();
        }
      }, [inputAutofocus.current, messageList.length]);


    return (
        <form onSubmit = { handleSubmit } className="form">          
            <div className="messages">
                {messageList.map((mess) => (
                    <Message author = {mess.author} text={mess.text} key={mess.id}/>
                ))}
            </div>
            <div className="input-style">
                <input type="text" value={ value } onChange = { handleChange } placeholder='Add your message' ref={inputAutofocus}/>
                <Button variant="dark" type="submit">Send</Button>{' '}
            </div>  
        </form>
    )
}


