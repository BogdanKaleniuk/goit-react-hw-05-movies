import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchMovies } from '../movieApi';

export default function RenderFilm() {
  const [renderFilm, setRenderFilm] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetchMovies();
        setRenderFilm(response.results);
      } catch (error) {
        console.log('Error1');
      } finally {
      }
    }
    fetchMovie();
    
  }, []);

  return (
    <ul>
      {renderFilm.map(({title, overview, poster_path, id}) => (
        <NavLink key={id} to={`/movies/:movieId${id}`}>
          <div>
            <div src={IMG_URL} alt={title} />
            <div> {title}</div>
          </div>
        </NavLink>
      ))}
      <Outlet />
    </ul>
  );
}