import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieListContext } from "./MovieListContext";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieListContext);
    return (
        <div>
            {movies.map((movie) => (
                <Movie name={movie.name} rate={movie.rate} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieList;
