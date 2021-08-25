import { Router } from './Component/Router';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Login } from './Component/Login';
import './services/firebase'


function App(props) {
 return (   
    <Provider store={store}>
       <PersistGate persistor={persistor}>
           {/* <Router /> */}
           <Login />
       </PersistGate>
      
    </Provider>
    
 );
}

export default App;

