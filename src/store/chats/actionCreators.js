import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE} from "./actionTypes";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
})

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    }
})
let timeout;

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    if(timeout) {
        clearTimeout(timeout);
    }

    const robotMess = { author: 'Robot', text: 'Hello, i am Robot, nice to meet you', id: Math.random() };

    timeout = setTimeout(() => {
        dispatch(sendMessage(chatId, robotMess));
    }, 1000)
}