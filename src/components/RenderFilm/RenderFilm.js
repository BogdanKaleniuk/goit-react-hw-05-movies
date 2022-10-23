import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getMovies } from '../movieApi';

export default function RenderFilm() {
  const [renderFilm, setRenderFilm] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await getMovies();
        setRenderFilm(response.results);
      } catch (error) {
        console.log('Error1');
      } finally {
      }
    }
    fetchMovie();
  }, []);

  return (
    <div>
      {renderFilm.map(({title, overview, id}) => (
        <NavLink key={id} to={`/movieId/${id}`}>
          <div>
            <div src={IMG_URL} alt={title} />
            <div> {title}</div>
          </div>
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}