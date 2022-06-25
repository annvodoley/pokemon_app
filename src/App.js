import React, {useEffect} from "react";
import './App.module.scss';
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import PokemonCard from "./components/Pages/PokemonCard/PokemonCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonApiAction, fetchPokemonListApiAction} from "./state/pokemons/action";


const App = () => {

    const dispatch = useDispatch();
    const pokemonsList = useSelector(state => state.pokemonReducer.pokemonList)
    useEffect(() => {
        dispatch(fetchPokemonListApiAction())
    }, [])

    useEffect(() => {
        dispatch(fetchPokemonApiAction(pokemonsList))
    }, [pokemonsList])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/pokemon" element={<PokemonCard/>}/>
            </Routes>
        </div>
    );
};

export default App;
