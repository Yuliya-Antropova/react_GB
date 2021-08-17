import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import "./Router.css";

export const Router = () => {
    return (
        <BrowserRouter>
            <ul className="header">
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/profile">PROFILE</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact>
                    <h2>WELCOME</h2>
                </Route>
                <Route path="/profile" render={(data) => 
                    <Profile match={data.match} />}>                    
                </Route>
                <Route path="/home/:chatId?">
                    <Home />
                </Route>
                <Route path="/no-chat">
                    <h2>Choose correct chat</h2>
                    <Link to="/home">HOME</Link>
                </Route>
                <Route path="*">
                    <h2>PAGE NOT FOUNDS</h2>
                </Route>
            </Switch>
        </BrowserRouter>        
    )
}