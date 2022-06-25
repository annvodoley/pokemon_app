import React from 'react';
import classes from './PokemonCard.module.scss';
import bulbasaur from "../../../images/Cards/bulbasaur.svg";
import {Link} from "react-router-dom";

const PokemonCard = () => {
    return (
        <div className={classes.PokemonCard}>
            <div className={classes.Left}>
                <img src={bulbasaur} alt=""/>
                <Link to='/home'>&lt; Back</Link>
            </div>
            <div className={classes.Right}>
                <h1>Bulbasaur</h1>
                <h2>Stats</h2>
                <div className={classes.TextBlock}>
                    <p><span>hp: </span> 45</p>
                    <p><span>attack: </span> 45</p>
                    <p><span>deffence: </span> 49</p>
                    <p><span>special attack: </span> 65</p>
                    <p><span>special deffence: </span> 65</p>
                    <p><span>speed: </span> 45</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;