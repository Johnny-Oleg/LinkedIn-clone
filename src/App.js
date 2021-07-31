import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, logout, selectUser } from './redux/userSlice';
import { auth } from './firebase';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import './App.css';

const App = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoUrl,
                }));
            } else {
                dispatch(logout());
            }
        })
    }, [])

    return (
        <div className="app">
            <Header />
            {!user ? 
                <Login /> : (
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div> 
            )}   
        </div>
    );
};

export default App;