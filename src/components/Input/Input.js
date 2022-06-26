import React, {useState} from "react";
import classes from './Input.module.scss'

const Input = (props) => {
    const [input, setInput] = useState('')

    return (
        <div className={classes.Input_module}>
            <input type={'text'} className={classes.Input_module__inp} placeholder={'Find pokemon'} onChange={(event) => setInput(event.target.value)} value={input}/>
            <input type={'button'} className={classes.Input_module__btn} value={'Search'} onClick={() => props.onClick(input)}/>
            <p className={classes.Input_module__line}></p>
        </div>
);

};

export default Input;