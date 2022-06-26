import React from "react";
import classes from './Cards.module.scss';
import {Link} from "react-router-dom";



const Cards = (props) => {

    return (
        <Link to={`/${props.title}`} className={classes.Cards}
              onClick={() => props.addCurrentPokemon({title: props.title, imageUrl:props.url, stats: props.stats})}>
                <img className={classes.Cards__img} src={props.url}/>
                <p className={classes.Cards__name}>{props.title}</p>
        </Link>


    );
};


export default Cards;