import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes";


const initialState = {
    chat1: {
        messages: [{author: 'Yulya', text: 'Hi', id: Math.random()}],
        name: 'Chat1',
        id: 'chat1'
    },
    chat2: {
        messages: [{author: 'Misha', text: 'Hello', id: Math.random()}],
        name: 'Chat2',
        id: 'chat2'
    },        
    chat3: {
        messages: [{author: 'Vlad', text: 'Whats up?', id: Math.random()}],
        name: 'Chat3',
        id: 'chat3'
    },        
    chat4: {
        messages: [{author: 'Katya', text: 'I am there', id: Math.random()}],
        name: 'Chat4',
        id: 'chat4'
    } 
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case (ADD_CHAT): {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                }
            }
        }
        case (DELETE_CHAT): {
            const newState = {...state};
            delete newState[payload]
            return newState;
        }  
        case (SEND_MESSAGE): {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message]
                }
            }
        }
        default: 
            return state;
    }
}