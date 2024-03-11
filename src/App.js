import React, { useEffect, useState } from "react";

import {tempMovieData} from "./data/tempMovieData";
import {tempWatchedData} from "./data/tempWatchedData";

import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import Search from "./components/layout/Search";
import Logo from "./components/layout/Logo";
import NumResults from "./components/layout/NumResults";
import MoviesList from "./components/MoviesList";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedSummary from "./components/WatchedSummary";
import Box from "./components/Box";
import Movie from "./components/Movie";
const KEY = "24ded076";

function Loader() {
  return <p className="loader">Loading...</p>
}

function ErrorMessage({message}) {
  return (
    <p className="error">
      {message}
    </p>
  );
}

export default function App() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const query = "interstellar";

  useEffect(() => {
    movies.length > 0 ? setLoading(false) : setLoading(true);
  },
  [movies]
  );

  useEffect(function() {
    async function fetchMovies() {
      try {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`);

        if(!res.ok) {
          throw new Error('Something went wrong with fetching movies');
        }
        const data = await res.json();
        setMovies(data.Search);
      } catch(err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

   return (
    <>
      {console.log('error', error)}
      {console.log('movies', movies)}
      {console.log('loading', isLoading)}
      {console.log('watched', watched)}
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && error && <ErrorMessage message={error} />}
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} /><WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
