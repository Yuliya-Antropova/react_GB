// import { useDispatch } from "react-redux";
// import { sendMessage } from "./chats/actionCreators";
// import { SEND_MESSAGE } from "./chats/actionTypes"

// export const middleware = store => next => action => {
    
//     if(action.type === SEND_MESSAGE &&
//         action.payload.message.author !== 'Robot') {
//         const robotMess = { author: 'Robot', text: 'Hello, i am Robot, nice to meet you', id: Math.random() };
//         setTimeout(() => {
//             store.dispatch(sendMessage(action.payload.chatId, robotMess));
//         }, 1000);
//     }
//     return next(action);
// }