import React from "react";
import classes from './Header.module.scss'
import icon from '../../images/Header/Header_logo.svg'

const Header = () => {
    return ( 
        <div className={classes.Header_module}>
             <img src={icon} className={classes.Header_module__icon}/>
        </div>
    );
};


export default Header;