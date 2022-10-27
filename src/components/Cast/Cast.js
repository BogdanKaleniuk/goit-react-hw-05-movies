import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesCast = (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7880f10208129df405f0f3d5264141ee&language=en-US`)
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCast(movieId);
        setCast(res);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {cast.map(castItem => {
          return (
            <li key={castItem.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
                <p>Popularity: {castItem.popularity}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;