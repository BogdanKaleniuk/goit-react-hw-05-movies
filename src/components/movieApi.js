import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const trendsParams = 'trending/movie/day?';

const API_KEY = 'api_key=7880f10208129df405f0f3d5264141ee';

export async function getMovies () {
  const res = await axios.get(`${BASE_URL}${trendsParams}${API_KEY}`);
  // console.log('gotovo');
  console.log(res.data);
  return res.data;
};
