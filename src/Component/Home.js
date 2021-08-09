import './Home.css';
import { useEffect, useCallback, useState } from "react";
import { MessageList } from './MessageList';
import { ChatList } from './ChatList';
import { Form } from './Form';

import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialChats = {
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

export const Home = () => {

  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );

   useEffect(() => {
        if (!chatId || 
          !chats[chatId]?.messages.length || 
          chats[chatId].messages[chats[chatId].messages.length - 1].author !== 'Robot') {
            const robotMess = { author: 'Robot', text: 'Hello, i am Robot, nice to meet you', id: Math.random() };
            setTimeout(() => {
              handleSendMessage(robotMess); 
            }, 1000);
            
        }
    }, [chats]);

 return (
  <div className="App">
    <div className="App-header">   
      <ChatList chats={chats} />
      {!!chatId && (
        <div  className="form">
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
   </div>
 );
}