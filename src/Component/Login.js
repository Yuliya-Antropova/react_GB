import { useInput } from "../utils/useInput"
import './MessageList.css'
import firebase from 'firebase';


export const Login = () => {

const {
        value: email,
        handleChange: handleChangeEmail,
        reset: resetEmail,
    } = useInput('')
const {
        value: password,
        handleChange: handleChangePassword,
        reset: resetPassword,
    } = useInput('')

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password) {
        return;
    }

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch {
        console.log(error)
    }
    

    resetEmail();
    resetPassword();
}

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="input-login">
                <input className="input-login-text" type="text" value={email} onChange={handleChangeEmail} placeholder="Add your e-mail" />
                <input className="input-login-text" type="password" value={password} onChange={handleChangePassword} placeholder="Add your password" />
                <input className="input-login-button" type="submit" />
            </div>
            
        </form>
    )
}