import React from "react";

const Movie = ({ name, rate, id }) => {
    return (
        <li key={id}>
            <h1>{name}</h1>
            <h2>{rate}/10</h2>
        </li>
    );
};

export default Movie;
