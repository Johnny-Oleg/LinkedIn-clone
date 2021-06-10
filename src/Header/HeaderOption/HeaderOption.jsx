import React from 'react';
import { Avatar } from '@material-ui/core';

import './HeaderOption.css';

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
    return (
        <div className="header-option" onClick={onClick}>
            {Icon && <Icon className="header-option__icon" />}
            {avatar && <Avatar className="header-option__icon" src={avatar} />}
            <h3 className="header-option__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;