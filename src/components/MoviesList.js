import Movie from "./Movie";

export default function MoviesList({movies, onSelectMovie}) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID} 
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}
