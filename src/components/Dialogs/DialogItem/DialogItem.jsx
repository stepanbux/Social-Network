import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? s.activeLink : s.dialogs;

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className = {setActive}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;