import { AppDispatch } from "../../store";
import { searchMovies, TMovie } from "../../utils";

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const fetchMoviesRequest = () => {
    return{
        type: FETCH_MOVIES_REQUEST
    }
}
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = (movies: TMovie[]) => {
    return{
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const fetchMoviesError = (error: any) => {
    return{
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

export const fetchMoviesBySearchValue= (searchValue: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchMoviesRequest());
        try{
            const response = await searchMovies(searchValue);
            dispatch(fetchMoviesSuccess(response.Search));
        } catch(error){
            dispatch(fetchMoviesError('Cannot update state'));
        }
    }
}