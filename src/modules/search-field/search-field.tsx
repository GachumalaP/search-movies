import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
import { searchMovies, TSearchMovieByTitleResponse } from "../../utils/omdb-api";

export const SearchField: React.FC = () => {
    const [searchValue, setSearchValue ] = useState<string>('');

    //TODO: define types for response getting from api
    const [ results, setResult ] = useState<TSearchMovieByTitleResponse[]>([]);

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);

    useEffect(() => {
        if(debouncedSearchTerm){
            setIsLoading(true);
            searchMovies(debouncedSearchTerm).then((result) => {
                setIsLoading(false);
                setResult(result["Search"]);
            });
        }else{
            setResult([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
          <input type="text" onChange={(e) => setSearchValue(e.target.value)} minLength={3}/></div>
      );
};
