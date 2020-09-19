import React, { useContext, useRef, useReducer, useEffect } from "react";
import { MovieListContext } from "./MovieListContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "addMovie":
            const randomId = Math.floor(Math.random() * 12121);

            return [
                ...state,
                {
                    name: action.movieName.current.value || "✨✨✨",
                    rate: action.moviePrice.current.value || 10,
                    id: randomId,
                },
            ];

        case "deleteMovie":
            for (let x of state) {
                if (x.name === action.deleteName.current.value) {
                    state.splice(state.indexOf(x), 1);
                }
            }

            return [...state];

        default:
            return state;
    }
};

const NonPropsComponent = () => {
    const movieName = useRef(null);
    const moviePrice = useRef(null);
    const deleteName = useRef(null);

    const [movies, setMovies] = useContext(MovieListContext);
    const [state, dispatch] = useReducer(reducer, movies);

    useEffect(() => {
        console.log(state);
        setMovies(state);
    });

    return (
        <>
            <input placeholder="movie name to add" ref={movieName}></input>
            <input
                ref={moviePrice}
                placeholder="movie rate to add"
                type="number"
            ></input>
            <button
                onClick={() => {
                    dispatch({ type: "addMovie", movieName, moviePrice });
                }}
            >
                add new movie
            </button>
            <br />
            <input
                style={{ background: "white" }}
                placeholder="movie name to delete"
                ref={deleteName}
            ></input>
            <button
                onClick={() => {
                    dispatch({ type: "deleteMovie", deleteName });
                }}
            >
                delete movie
            </button>
        </>
    );
};

export default NonPropsComponent;
