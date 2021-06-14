import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';

import { selectUser } from '../../redux/userSlice';
import './HeaderOption.css';

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
    const user = useSelector(selectUser);

    return (
        <div className="header-option" onClick={onClick}>
            {Icon && <Icon className="header-option__icon" />}
            {avatar && 
                <Avatar className="header-option__icon" src={user?.photoUrl}>
                    {user?.email[0].toUpperCase()}
                </Avatar>
            }
            <h3 className="header-option__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;