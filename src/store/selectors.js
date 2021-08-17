export const getChats =(state) => {
    return state.chats;
}
export const getName =(state) => {
    return state.profile.name || "Yulya";
}