import logo from "../../images/logo.png";
import userImg from "../../images/admin.jpg";
import backProfileImg from "../../images/timeline-1.jpg";
import userAvatar from "../../images/user-avatar.jpg";
import React from "react";
import s from './Header.module.css';

function Header() {
    return <div className={s.header}>
        <div className={s.topMenu}>
            <img src={logo} className={s.logo} />
            <div className={s.menuItem}>Home<i className={s.downArrow}/></div>
            <div className={s.menuItem}>Timeline<i className={s.downArrow}/></div>
            <div className={s.menuItem}>Account Settings<i className={s.downArrow}/></div>
            <div className={s.menuItem}>More pages<i className={s.downArrow}/></div>

            <div className={s.settingArea}>
                <div className={s.search}><i className={s.searchIcon}/></div>
                <div className='notofocation'><i className={s.homeIcon}/></div>
                <div className='notofocation'><i className={s.notificationIcon}/></div>
                <div className='messages'><i className={s.messageIcon}/></div>
                <div className='languages'><i className={s.languageIcon}/></div>

            </div>

            <div className={s.userImage}>
                <img src={userImg}/>
            </div>

            <div className={s.burgerMenu}><i className={s.burgerMenuIcon}/> </div>

        </div>
        <div className='profileBackImg'>
            <img src={backProfileImg} />
        </div>
        <div className='profileImg'>
            <img src={userAvatar}/>
        </div>
    </div>
}

export default Header;