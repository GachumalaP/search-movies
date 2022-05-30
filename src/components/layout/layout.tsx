import React from "react";
import { Movies } from "../movies";
import { SearchField } from "../search-field";
import Spinner from "react-bootstrap/Spinner";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
  const isLoading = useAppSelector(
    (State: RootState) => State.movies.isLoading
  );

  return (
    <div>
      <SearchField />
      {isLoading ? <Spinner animation="border" /> : <Movies />}
    </div>
  );
};
