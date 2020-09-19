import React, { useState, createContext } from "react";
import NonPropsComponent from "./NonPropsComponent";

export const MovieListContext = createContext();

export const MovieListProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            rate: "5",
            id: 1,
        },
        {
            name: "Harry Potter 2",
            rate: "5",
            id: 2,
        },
        {
            name: "Harry Potter 3",
            rate: "5",
            id: 3,
        },
    ]);
    return (
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieListContext.Provider>
    );
};
