import { Router } from './Component/Router';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


function App(props) {
 return (   
    <Provider store={store}>
       <PersistGate persistor={persistor}>
           <Router />
       </PersistGate>
      
    </Provider>
    
 );
}

export default App;

