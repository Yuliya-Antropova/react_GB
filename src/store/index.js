import { combineReducers, createStore } from 'redux';
import { chatsReducer } from './chats/chatsReducer';
import { profileReducer } from './profile/profileReducer';

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
    }),
     
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);