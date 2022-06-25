import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
    return (
        <div className={classes.headerWrapper}>
            <NavLink to="/pre-junior"> -PreJunior- </NavLink>
            <NavLink to="/junior"> -Junior- </NavLink>
            <NavLink to="/junior-plus"> -JuniorPlus- </NavLink>
            <button>x</button>
        </div>

    )
}

export default Header
