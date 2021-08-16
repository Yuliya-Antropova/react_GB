import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'
import { useInput } from "../utils/useInput";

export const Form = ({ onSendMessage }) => {

    const { value, handleChange, reset } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            text: value, id: Math.random()
        });
        reset();       
    }

    const inputAutofocus = useRef(null);
    useEffect(() => {
        if (inputAutofocus.current) {
            inputAutofocus.current.focus();
        }
      }, [inputAutofocus.current]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="input-style">
                <input type="text" value={ value } onChange = { handleChange } placeholder='Add your message' ref={inputAutofocus}/>
                <Button variant="dark" type="submit">Send</Button>{' '}
            </div>  
        </form>            
    )
}