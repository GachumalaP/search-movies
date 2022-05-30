import { Movie } from "../MovieCard";
import { useAppSelector } from "../../hooks";
import Container from "react-bootstrap/Container";
import { RootState } from "../../store";
import styles from "./moviesGrid.module.scss";

export const MoviesGrid = () => {

  const { allMovies, error} = useAppSelector((state: RootState) => state.movies);

  const renderMovies = () => (allMovies?.map((movie, index) => <Movie key={index.toString()} movie={movie} />));

  if(error && allMovies.length === 0) {
    return(
      <Container className={styles["error-container"]}>
        Sorry, we couldn't find any matches. Update your search Term and try again.
      </Container>
    )
  }

  return (
    <Container className={styles["movies-container"]}>
      {renderMovies()}
    </Container>
  )
}
