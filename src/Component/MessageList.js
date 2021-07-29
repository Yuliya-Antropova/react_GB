import { useEffect, useRef, useState } from "react";
import { Message } from "./Message";

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'


export const Component = (props) => {

    // const authorsMess = [
    //     {author: 'Yulya', text: 'Hi', id: Math.random()},
    //     {author: 'Misha', text: 'Hello', id: Math.random()},
    //     {author: 'Vlad', text: 'Whats up?', id: Math.random()},
    //     {author: 'Katya', text: 'I am there', id: Math.random()},
    // ]
    
    const [MessageList, setMessageList] = useState([]);

    useEffect(() => {
        if (MessageList.length && MessageList[MessageList.length - 1].author !== 'Robot') {
            const robotMess = { author: 'Robot', text: 'Hello, i am Robot, nice to meet you', id: Math.random() };
            setTimeout(() => {
               setMessageList([...MessageList, robotMess]); 
            }, 1000);
            
        }
    }, [MessageList]);


    const handleClick = () => {
        const newMessage = { author: 'Yulya', text: value, id: Math.random() }; 
        setMessageList([...MessageList, newMessage]);
        setValue('');
    }

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const addMessToForm = (e) => {
        e.preventDefault();
    }

    //это работает при перезагрузке страницы, а дальше только 1 раз - если нажать кнопку отправить.
    //пока не разобралась почему.
    const inputAutofocus = useRef(null);
    useEffect(() => {
        if (inputAutofocus.current) {
            inputAutofocus.current.focus();
        }
      }, [inputAutofocus.current]);


    return (
        <form onSubmit = {addMessToForm} className="form">          
            <div className="messages">
                {MessageList.map((mess) => (
                    <Message author = {mess.author} text={mess.text} key={mess.id}/>
                ))}
            </div>
            <div className="input-style">
                <input type="text" value={ value } onChange = { handleChange } placeholder='Add your message' ref={inputAutofocus}/>
                <Button variant="dark" type="submit" onClick ={handleClick}>Send</Button>{' '}
            </div>  
        </form>
    )
}


