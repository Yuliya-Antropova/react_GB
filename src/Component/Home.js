import "./Home.css";
import { useEffect, useCallback, useState } from "react";
import { MessageList } from "./MessageList";
import { ChatList } from "./ChatList";
import { Form } from "./Form";

import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteChat, sendMessageWithReply } from "../store/chats/actionCreators";
import { getChats, getName } from "../store/selectors";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { chatId } = useParams();
  const history = useHistory();

  const chats = useSelector(getChats);
  const name = useSelector(getName);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReply(chatId, {...newMessage, author: name}));
    },
    [chatId]
  );

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);

  if (!!chatId && !chats[chatId]) {
    history.replace('/no-chat');
  }

  return (
    <div className="App">
      <div className="App-header">
        <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
        {!!chatId && chats[chatId] &&(
          <div className="form">
            <MessageList messages={chats[chatId].messages} />
            <Form onSendMessage={handleSendMessage} />
          </div>
        )}
      </div>
    </div>
  );
};
