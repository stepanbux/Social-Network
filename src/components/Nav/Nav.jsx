import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const setActive = ({isActive}) => isActive ? s.activeLink : s.elem;

const Nav = () => {
    return(<nav className={s.nav}>
        <div className={s.elem}>
        <NavLink to='/profile' className = {setActive}>Profile</NavLink> 
        </div> 
        <div className={s.elem}>
        <NavLink to='/messages' className = {setActive}>Messages</NavLink> 
        </div> 
        <div className={s.elem}>
        <NavLink to='/users' className = {setActive}>Users</NavLink> 
        </div> 
        <div className={s.elem}>
        <NavLink to='/news' className = {setActive}>News</NavLink> 
        </div> 
        <div className={s.elem}>
        <NavLink to='/music' className = {setActive}>Music</NavLink> 
        </div> 
        <div className={s.elem}>
        <NavLink to='/settings' className = {setActive}>Settings</NavLink> 
        </div> 
    </nav>
  );
}
export default Nav;