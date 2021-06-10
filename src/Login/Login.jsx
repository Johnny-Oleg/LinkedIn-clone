import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase';
import { login } from '../redux/userSlice';
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoUrl,
                }))
            })
            .catch(error => alert(error));
    }
    
    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: picture,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: picture,
                    }));
                })
            })
            .catch(error => alert(error));
    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Full name (required if registering)" 
                    type="text" 
                />
                <input 
                    value={picture} 
                    onChange={e => setPicture(e.target.value)} 
                    placeholder="Profile picture url (optional)" 
                    type="text" 
                />
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email" 
                    type="email" 
                />
                <input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password" 
                    type="password" 
                />
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>
                Not a member?&nbsp;
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;