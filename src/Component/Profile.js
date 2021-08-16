import { left } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_CHANGE_SHOW } from "../store/profile/actions";

export const Profile = ({ match }) => {

    const profileState = useSelector((state) => state);
    const dispatch = useDispatch();

    const Transition = () => {
            dispatch({
                type: PROFILE_CHANGE_SHOW
            });
    }

    return (
        <div>
        <h2>Profile</h2>
        <button onClick={Transition}>Click Me</button>
        <input type="checkbox"  onClick={Transition} id="say"/>
        <label for="say">Transition</label>
        
        {profileState.show && <h4>Hello</h4>}
      </div>
    )
    
}