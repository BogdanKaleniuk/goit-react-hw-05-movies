import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchMovies } from '../movieApi';

export default function RenderFilm() {
  const [renderFilm, setRenderFilm] = useState([]);

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
      {renderFilm.map(({title, id}) => (
        <NavLink key={id} to={`/movies/${id}`}>
          <div>
            <div alt={title} />
            <div> {title}</div>
          </div>
        </NavLink>
      ))}
      <Outlet />
    </ul>
  );
}