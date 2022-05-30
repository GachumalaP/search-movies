import React, { useState } from "react";
import { TMovie } from "../../utils";
import { Card } from "react-bootstrap";
import { Button } from "../button";
import placeholderImg from "../../assets/placeholder-img.jpg";
import styles from "./movieCard.module.scss";

type TMovieProps = {
  movie: TMovie;
};
export const Movie: React.FC<TMovieProps> = ({ movie }) => {
  const [labelActive, setLabelActive] = useState<boolean>(false);

  const onViewDetailsClick = () => {
    setLabelActive(!labelActive);
  };

  const { Poster, Title, Year, Type } = movie;

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
          <span className={
            labelActive
              ? styles["card-label-visible"]
              : styles["card-label-hide"]
          }>{Type}
          </span>
        </Card.Title>
        <Card.Text className={styles["movie-card-release-year"]}>
          <span>Release year</span>
          {Year}
        </Card.Text>
        <Button
          className={styles["movie-card-button"]}
          onClickHandler={onViewDetailsClick}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
