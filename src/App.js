import React, { useEffect, useState } from "react";

import {tempMovieData} from "./data/tempMovieData";
import {tempWatchedData} from "./data/tempWatchedData";

import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import Search from "./components/layout/Search";
import Logo from "./components/layout/Logo";
import NumResults from "./components/layout/NumResults";
import MovieDetails from "./components/MovieDetails";
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
  const [query, setQuery] = useState("My Dog Skip");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const tempQuery = "titanic";

  const handleSelectMovie = (id) => {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  const handleCloseMovie = () => {
    setSelectedId(null)
  }

  useEffect(function() {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError('');
        setMovies([]);
        const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`);

        const data = await res.json();

        if( ! res.ok ) {
          throw new Error(data.Error);
        }

        if( data.Response === 'False' ) {
          throw new Error(data.Error);
        }

        setMovies( data.Search );
        setLoading(false);
      } catch( err ) {
        console.log(err);
        setError(err.message);
        setLoading(false);
      }
    }

    if( query.length < 3 ) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies();
  }, [ query ]);

   return (
    <>
      <NavBar>
        <Logo />
        <Search query={ query } setQuery={ setQuery }/>
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error.length > 0 && <ErrorMessage message={error} />}
          <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
        </Box>
        <Box>
          {console.log(selectedId)}
          { selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} /> :
          <>
            <WatchedSummary watched={watched} /><WatchedMovieList watched={watched} />
          </>
          }
        </Box>
      </Main>
    </>
  );
}
