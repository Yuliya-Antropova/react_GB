import { useState } from "react"
import { useDispatch } from "react-redux";
import { addChat } from "../store/chats/actionCreators";
import { useInput } from "../utils/useInput";

export const AddChat = () => {

    const dispatch = useDispatch();

    const { value, handleChange, reset } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            return
        }
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, value));
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleSubmit}>Add chat</button>
        </form>
    )
}