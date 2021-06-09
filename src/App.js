import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <Sidebar />
                <Feed />
                {/* <Feed />
                <Widgets /> */}
            </div>    
        </div>
    );
};

export default App;