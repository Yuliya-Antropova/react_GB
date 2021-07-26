import './App.css';
import { Message } from './Message'

const firstName = 'Alex';

function App(props) {
 return (
   <div className="App">
     <header className="App-header">
       My First React App
       <h3>Hello, {props.name}</h3>
       <Message name={firstName} />
     </header>
   </div>
 );
}

export default App;