import { TMovie } from "../../utils";

export type TMoviesStore = {
    isLoading: boolean,
    allMovies: TMovie[];
    error: string
}