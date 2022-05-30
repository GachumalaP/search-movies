import { render, screen } from "@testing-library/react";
import { Movie } from "../MovieCard";
import { TMovie } from "../../../utils";

describe('movie component', () => {
    const movie:TMovie = {
        Title: 'Spider-Man',
        Year: '2002',
        imdbID: 'tt0145487',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
    }
    render(<Movie movie={movie}/>);

    it('renders movie with correct img url', () => {
        const moviePoster = screen.getByRole('img');
        expect(moviePoster).toHaveAttribute('src', movie.Poster);
    });
})

