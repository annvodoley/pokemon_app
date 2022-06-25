import {
    ADD_POKEMON_LIST,
    ADD_POKEMONS,
    REQUEST_POKEMON_FAILURE,
    REQUEST_POKEMON_LOADING,
    REQUEST_POKEMON_SUCCESS
} from "./types";

export const fetchPokemonListApiAction = () => {
    return dispatch => {
        dispatch({type: REQUEST_POKEMON_LOADING})
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            .then((response) => response.json())
            .then(res => {
                dispatch({type: REQUEST_POKEMON_SUCCESS})
                dispatch({type: ADD_POKEMON_LIST, payload: res.results})
                dispatch(fetchPokemonApiAction(res.result))
            })
            .catch(() => dispatch({type: REQUEST_POKEMON_FAILURE}))
    }
}

export const fetchPokemonApiAction = (list) => {
    return dispatch => {
        dispatch({type: REQUEST_POKEMON_LOADING})

        const fetchList = list.map(item => fetch(item))
        Promise.all(fetchList)
            .then(results => Promise.all(results.map(r => r.json())))
            .then(results => {
                dispatch({type: REQUEST_POKEMON_SUCCESS})
                dispatch({type: ADD_POKEMONS, payload: results})
    })
            .catch(() => dispatch({type: REQUEST_POKEMON_FAILURE}))
    }
}

