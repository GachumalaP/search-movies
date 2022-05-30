import { Movie } from "../movie";
import { useAppSelector } from "../../hooks";
import Container from "react-bootstrap/Container";
import { RootState } from "../../store";
import styles from "./movies.module.scss";

export const Movies = () => {
  const { allMovies, error} = useAppSelector((state: RootState) => state.movies);

  const renderMovies = () => (allMovies?.map((movie, index) => <Movie key={index.toString()} movie={movie} />));

  if(error && allMovies.length === 0) {
    return(
      <Container>
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
