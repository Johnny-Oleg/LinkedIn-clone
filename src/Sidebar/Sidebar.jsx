import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';

import { selectUser } from '../redux/userSlice';
import './Sidebar.css';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = topic => (
        <div className="sidebar__recent-item">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                {/* <img src="https://media-exp1.licdn.com/dms/image/C4E16AQH8a94ABmoCyw/profile-displaybackgroundimage-shrink_200_800/0/1599135653952?e=1628726400&v=beta&t=6X4rvy7_xLiX_fIkUlvOgzBv_3u875iuxu675O7K8PM" alt="" /> */}
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3jlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>Senior Frontend Developer 🧑‍💻{/*user.email*/}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__stat-number">50027</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__stat-number">27862</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("japan")}
                {recentItem("developer")}
                {recentItem("videogames")}
                {recentItem("programming")}
            </div>
        </div>
    )
}

export default Sidebar;