import React from 'react';
import classes from './Home.module.scss';
import Input from "../../Input/Input";
import Cards from "../../Cards/Cards";
import ditto from "../../../images/Cards/ditto.svg";
import bulbasaur from "../../../images/Cards/bulbasaur.svg";
import weedle from "../../../images/Cards/weedle.svg";
import beedrill from "../../../images/Cards/beedrill.svg";
import Header from "../../Header/Header";
import {useSelector} from "react-redux";

const Home = () => {
    const pokemon = useSelector(state => state.pokemonReducer.pokemons)
    return (
        <div className={classes.Home}>
            <Input/>
            {pokemon.map((items, index ) => {
                return (
                <Cards key = {index} title = {items.name} url={items.sprites.front_default}/>
                )
            })}
        </div>
    );
};

export default Home;
