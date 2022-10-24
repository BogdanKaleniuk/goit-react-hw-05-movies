import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const BASE_URL = 'https://api.themoviedb.org/3/';
const trendsParams = 'trending/movie/day?';
const SEARCH_URL = 'search/movie?';
const API_KEY = 'api_key=7880f10208129df405f0f3d5264141ee';
const language = 'language=en-US';

export async function fetchMovies () {
  const res = await axios.get(`${trendsParams}${API_KEY}`);

  return res.data;
};

export async function fetchSearchMovies (query) {
  const res = await axios.get(`${SEARCH_URL}?${API_KEY}&query=${query}&language=en-US`);

  return res.data;
};

export async function GetMoviesDetails(id) {
  const res = await axios.get(`movie${id}?${API_KEY}&${language}`);
// console.log(res.data)

  return res.data;
}

// export const GetMoviesDetails = async id => {
//   const res = await axios.get(`movie/${id}?${API_KEY}&language=en-US`);

//   return res.data;
// };