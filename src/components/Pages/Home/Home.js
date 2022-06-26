import React from 'react';
import classes from './Home.module.scss';
import Input from "../../Input/Input";
import Cards from "../../Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {
    addCurrentPokemonAction,
    fetchPokemonApiAction,
    fetchPokemonItemApiAction
} from "../../../state/pokemons/action";

const Home = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonReducer.pokemons)
    const pokemonsList = useSelector(state => state.pokemonReducer.pokemonList)

    const addCurrentPokemon = (currentPokemon) => {
        dispatch(addCurrentPokemonAction(currentPokemon))
    }

    //Input

    const searchPokemon = (pokemonName) => {
        if(pokemonName){
            dispatch(fetchPokemonItemApiAction(pokemonName))
        } else {
            dispatch(fetchPokemonApiAction(pokemonsList))
        }
    }

    return (
        <div className={classes.Home}>
            <Input onClick={searchPokemon}/>
            {pokemon.map((items, index) => {
                return (
                    <Cards key={index} title={items.name} url={items.sprites.front_default} stats = {items.stats} addCurrentPokemon = {addCurrentPokemon}/>
                )
            })}
        </div>
    );
};

export default Home;
