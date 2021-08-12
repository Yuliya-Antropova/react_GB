import { useDebugValue } from "react";
import { PROFILE_CHANGE_SHOW, PROFILE_SET_NAME } from "./actionsTypes";

const initialState = {
    show: false,
    name: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_CHANGE_SHOW): {
            return {
                ...state,
                show: !state.show
            }
        }
        case (PROFILE_SET_NAME): {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state;
    }
    
}