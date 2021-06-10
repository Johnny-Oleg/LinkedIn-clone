import React from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { auth } from '../firebase';
import { logout } from '../redux/userSlice';
import HeaderOption from './HeaderOption/HeaderOption';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());

        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption 
                    onClick={logoutOfApp}
                    avatar="https://media-exp1.licdn.com/dms/image/C4E35AQGVOvaIo1Il5g/profile-framedphoto-shrink_100_100/0/1599996056635?e=1623340800&v=beta&t=sFGbTT6i72PUeOYSy3O8-gxI2f_2jbJEX79hMV7AYJ4" 
                    title="profile"
                />
            </div>
        </div>
    )
}

export default Header;