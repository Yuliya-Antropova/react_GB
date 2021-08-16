import { useDebugValue } from "react";
import { PROFILE_CHANGE_SHOW } from "../profile/actions";

const initialState = {
    show: false,
    name: 'Yulya',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_CHANGE_SHOW): {
            return {
                ...state,
                show: !state.show
            }
        }
        default:
            return state;
    }
}