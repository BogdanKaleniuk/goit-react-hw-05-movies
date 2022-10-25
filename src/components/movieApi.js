import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const BASE_URL = 'https://api.themoviedb.org/3/';
const trendsParams = 'trending/movie/day?';
const SEARCH_URL = 'search/movie?';
const API_KEY = 'api_key=7880f10208129df405f0f3d5264141ee';
const language = 'language=en-US';


export async function fetchMovies() {
  const res = await axios.get(`${trendsParams}${API_KEY}`);

  return res.data;
};
// const API_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '62a0747aac137915f35199437084137e';
// `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`

// export async function fetchSearchMovies(query) {
//   const res = await axios.get(`search/movie?api_key=7880f10208129df405f0f3d5264141ee&language=en-US&page=1&include_adult=false&query=${query}`);

//   return res.data;
// };

export async function GetMoviesDetails(movieId) {
  const res = await axios.get(`movie/${movieId}?${API_KEY}&${language}`);
// console.log(res.data)

  return res.data;
}

// export const GetMoviesDetails = async id => {
//   const res = await axios.get(`movie/${id}?${API_KEY}&language=en-US`);

//   return res.data;
// };