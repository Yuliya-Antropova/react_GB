import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MessageList.css'

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            author: 'Yulya', text: value, id: Math.random()
        });
        setValue('');       
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