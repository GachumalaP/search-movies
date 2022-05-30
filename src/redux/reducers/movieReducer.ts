import { FETCH_MOVIES_ERROR, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "../actions/movieActions";
import { TMoviesStore } from "../types/movie-types";

const initialState: TMoviesStore = {
    isLoading: false,
    allMovies: [],
    error:''
}

export const movieReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_REQUEST: return {
            ...state,
            isLoading: true
        }
        case FETCH_MOVIES_SUCCESS: return {
            ...state,
            isLoading: false,
            allMovies: [...action.payload],
            error: ''
        }
        case FETCH_MOVIES_ERROR: return {
            ...state,
            isLoading: false,
            allMovies: [],
            error: action.payload
        }
        default: return state
    }
}