import { left } from "@popperjs/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/profile/actionCreators";
import { PROFILE_CHANGE_SHOW, PROFILE_SET_NAME } from "../store/profile/actionsTypes";
import { getName } from "../store/selectors";

export const Profile = ({ match }) => {

    const [value, setValue] = useState('');
    const name = useSelector(getName);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(changeName(value));
            setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
        <h2>Profile of { name }</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} id="say"/>
            <button onClick={handleSubmit}>Save name</button>
        </form>
        
      </div>
    )
    
}