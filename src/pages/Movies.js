// import SearchBar from '../components/SearchBar/SearchBar';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { fetchSearchMovies } from '../components/movieApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultParams = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(defaultParams ? defaultParams : '');
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    function fetchMovie() {
      
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=7880f10208129df405f0f3d5264141ee&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(response => response.json())
        .then(data => {
           if (data.total_results === 0) {
          alert(
            'По запиту немає фільмів, спробуйте ще раз'
          );
          return;
        }
          setMovies(
            data.results.map(({ id, title }) => ({ id: id, title: title }))
          );
        })
        
        .catch(error => console.log(error));
        
    }
    

    fetchMovie();
  }, [query]);

  const handleSubbmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    setQuery(value);
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubbmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`${id}`}
                search={{ querySerch: `query=${query}` }}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;