import {ADD_CURRENT_POKEMON, ADD_POKEMON_ITEM, ADD_POKEMON_LIST, ADD_POKEMONS, REQUEST_POKEMON_SUCCESS} from "./types";

const initialState = {
    pokemonList: [],
    pokemons: [],
    currentPokemon: {}
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON_LIST:
            return {...state, pokemonList: action.payload.map(item => item.url)}
        case ADD_POKEMONS:
            return {...state, pokemons: action.payload}
        case ADD_CURRENT_POKEMON:
            return {...state, currentPokemon: action.payload}
        case ADD_POKEMON_ITEM:
            return {...state, pokemons: [action.payload]}
        default:
            return state
    }
}