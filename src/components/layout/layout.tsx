import React from "react";
import { MoviesGrid } from "../MoviesGrid";
import { SearchField } from "../SearchField";
import Spinner from "react-bootstrap/Spinner";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

export const Layout: React.FC = () => {
  const isLoading = useAppSelector(
    (State: RootState) => State.movies.isLoading
  );
  return (
    <div>
      <SearchField />
      {isLoading ? <Spinner animation="border" /> : <MoviesGrid />}
    </div>
  );
};
