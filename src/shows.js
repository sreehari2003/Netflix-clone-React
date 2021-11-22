const API_KEY = "19f8f3e02fa68353637a692eddb62840";
const def = "https://api.themoviedb.org/3";

const shows = {
  fetchTrending: `${def}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${def}/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `${def}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${def}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${def}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${def}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${def}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${def}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
console.log(shows.fetchNetflixOriginals);
export default shows;
// https://api.themoviedb.org/3/trending/all/week?api_key=19f8f3e02fa68353637a692eddb62840&language=en-US
