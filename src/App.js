import { Router } from './Component/Router';
import { Provider } from 'react-redux';
import { store } from './store';


function App(props) {
 return (   
    <Provider store={store}>
       <Router />
    </Provider>
    
 );
}

export default App;

