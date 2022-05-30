export const searchMovies = async (searchValue: string) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const url = process.env.REACT_APP_OMDB_URL;
    const response = await fetch(`${url}?s=${searchValue}&type=movie&apikey=${apiKey}`);
    const movies = await response.json();
    return movies;
}