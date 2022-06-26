import React, {useEffect} from 'react';
import classes from './PokemonCard.module.scss';
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPokemonAction} from "../../../state/pokemons/action";

const PokemonCard = () => {

    const currentPokemon = useSelector(state => state?.pokemonReducer.currentPokemon)
    const pokemon = useSelector(state => state.pokemonReducer.pokemons)
    const pokemonLocation = useLocation().pathname.split('/')[1]

    const dispatch = useDispatch()


    useEffect(() => {
        const newCurrentPokemon = {}
        pokemon.forEach((item) => {
            if(item.name === pokemonLocation){
                dispatch(addCurrentPokemonAction({title: item.name, imageUrl:item.sprites.front_default, stats: item.stats}))
            }
        })
    }, [pokemon])

    return (
        <div className={classes.PokemonCard}>
            <div className={classes.Left}>
                <img className={classes.Img} src={currentPokemon?.imageUrl} alt=""/>
                <Link to='/home'>&lt; Back</Link>
            </div>
            <div className={classes.Right}>
                <h1>{currentPokemon?.title}</h1>
                <h2>Stats</h2>
                <div className={classes.TextBlock}>
                    {currentPokemon.stats?.map((item, index) => {
                        return (
                            <p><span>{item?.stat.name}: </span> {item?.base_stat}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;