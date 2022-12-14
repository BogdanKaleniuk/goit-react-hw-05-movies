import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GetMoviesDetails } from "../components/movieApi";
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from './FilmDetails.style';

  export default function FilmDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: 'orangered',
  };
  let activeColorNameBlack = {
  color: 'black',
};

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    GetMoviesDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('Error3');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  console.log(movie)
  return (
    <>
      <div>
        <Button onClick={handleClick}>
          Go back
        </Button>
        
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img width={300}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <h2>Additional Information</h2>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : activeColorNameBlack)}
            state={location.state}
          >
            <p>Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : activeColorNameBlack)}
            state={location.state}
          >
            <p>Cast</p>
          </NavLink>
          <hr />
          <Outlet />
        </div>
      </div>
    </>
  );
  };
  