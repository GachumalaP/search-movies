import { movieReducer } from "../movieReducer";

describe('movie reducer', () => {
    const initialState = {
        isLoading: false,
        allMovies: [],
        error:''
    }

    const testData = [
        {
            Title: 'Spider-Man',
            Year: '2002',
            imdbID: 'tt0145487',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
          },
          {
            Title: 'Spider-Man: No Way Home',
            Year: '2021',
            imdbID: 'tt10872600',
            Type: 'movie',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg'
          }
    ]

    it('should return the initial state when an action type is not passed', () => {
        const reducer = movieReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    });

    it('should handle FETCH_MOVIES_REQUEST', () => {
        const reducer = movieReducer(initialState, { type:"FETCH_MOVIES_REQUEST"});
        expect(reducer).toEqual({
            isLoading: true,
            allMovies: [],
            error:''
        });
    });

    it('should handle FETCH_MOVIES_SUCCESS as expected', () => {
        const reducer = movieReducer(initialState, {
            type: "FETCH_MOVIES_SUCCESS",
            payload: testData
        });
        expect(reducer).toEqual({
            isLoading: false,
            allMovies: testData,
            error:''
        });
    });
    it('should handle FETCH_MOVIES_ERROR as expected', () => {
        const reducer = movieReducer(initialState, {
            type: "FETCH_MOVIES_ERROR", 
            payload: "cannot update state"
        });
        expect(reducer).toEqual({
            isLoading: false,
            allMovies: [],
            error: "cannot update state"
        })
    })
});