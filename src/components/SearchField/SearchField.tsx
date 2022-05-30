import React, { useEffect, useState } from "react";
import { useDebounce, useAppDispatch } from "../../hooks";
import { fetchMoviesBySearchValue } from "../../redux/actions/movieActions";
import styles from "./searchField.module.scss";

export const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchMoviesBySearchValue(debouncedSearchTerm.trim()));
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      className={styles["search-field"]}
      type="text"
      placeholder="search movies"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
