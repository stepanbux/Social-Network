import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return(
        <header className={s.header}>
            <img src = 'https://i.ibb.co/Mh58DRn/1.png' />

            <div className={s.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;