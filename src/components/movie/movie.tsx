import React from "react";
import { TMovie } from "../../utils";
import Card from "react-bootstrap/Card";
import { Button } from "../button";
import placeholderImg from "../../assets/placeholder-img.jpg";
import styles from "./movie.module.scss";

type TMovieProps = {
  movie: TMovie;
};
export const Movie: React.FC<TMovieProps> = ({ movie }) => {
  const onButtonClick = () => {
    console.log("btn clicked");
  };

  const {
    Poster,
    Title,
    Year
  } = movie;

  return (
    <Card className={styles["movie-card"]}>
      <Card.Img
        className={styles["movie-card-img"]}
        variant="top"
        src={Poster !== "N/A" ? Poster : placeholderImg}
      />
      <Card.Body className={styles["movie-card-body"]}>
        <Card.Title className={styles["movie-card-title"]}>
          {Title}
        </Card.Title>
        <Card.Text className={styles["movie-card-release-year"]}>
          <span>Release year</span>
          {Year}
        </Card.Text>
        <Button className={styles["movie-card-button"]} onClickHandler={onButtonClick}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
