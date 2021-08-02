import './App.css';
import { MessageList } from './Component/MessageList';
import { ChatList } from './Component/ChatList';


function App(props) {
 return (
   <div className="App">
     <div className="App-header">       
       <MessageList />
        <ChatList />
     </div>
   </div>
 );
}

export default App;

