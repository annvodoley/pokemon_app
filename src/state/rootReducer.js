import {pokemonReducer} from "./pokemons/reducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    pokemonReducer: pokemonReducer
})