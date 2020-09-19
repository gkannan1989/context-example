import React from "react";
import MovieList from "./MovieList";
import NonPropsComponent from "./NonPropsComponent";
import { MovieListProvider } from "./MovieListContext";
import "./App.css";

function App() {
    return (
        <MovieListProvider>
            <div className="App">
                <NonPropsComponent />
                <MovieList />
            </div>
        </MovieListProvider>
    );
}

export default App;
