import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import movies from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
