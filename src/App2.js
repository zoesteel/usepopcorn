// import React, { useState } from "react";

// import {tempMovieData} from "./data/tempMovieData";
// import {tempWatchedData} from "./data/tempWatchedData";

// import Main from "./components/layout/Main";
// import NavBar from "./components/layout/NavBar";
// import Search from "./components/layout/Search";
// import Logo from "./components/layout/Logo";
// import NumResults from "./components/layout/NumResults";
// import MoviesList from "./components/MoviesList";
// import WatchedMovieList from "./components/WatchedMovieList";
// import WatchedSummary from "./components/WatchedSummary";
// import Box from "./components/Box";

// export default function App() {
//   // const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([tempMovieData]);
//   const [watched, setWatched] = useState([tempWatchedData]);

//   return (
//     <>
//       <NavBar>
//         <Logo />
//         <Search />
//         <NumResults movies={movies} />
//       </NavBar>
//       <Main>
//         <Box element={<MoviesList movies={movies} />} />
//         <Box element={
//           <>
//             <WatchedSummary watched={watched} />
//             <WatchedMovieList watched={watched} />
//           </>
//         } />
//       </Main>
//     </>
//   );
// }
