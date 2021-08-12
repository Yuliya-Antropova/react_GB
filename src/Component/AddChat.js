import { useState } from "react"
import { useDispatch } from "react-redux";
import { addChat } from "../store/chats/actionCreators";

export const AddChat = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            return
        }
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, value));
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleSubmit}>Add chat</button>
        </form>
    )
}