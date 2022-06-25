import React from "react";
import classes from './Input.module.scss'

const Input = () => {

    return (
        <div className={classes.Input_module}>
            <input type={'text'} className={classes.Input_module__inp} placeholder={'Find pokemon'}/>
            <input type={'button'} className={classes.Input_module__btn} value={'Search'}/>
            <p className={classes.Input_module__line}></p>
        </div>
);

};

export default Input;