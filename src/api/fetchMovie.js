import axios from "axios";

const key = "api_key=84f13df83e59196891e6f6dada91355f";

const movie = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const getNetflixOriginal = async () => {
  const res = await movie.get(`/discover/tv?${key}&with_networks=213`);

  return res.data.results;
};

const getTrending = async () => {
  const res = await movie.get(`/trending/all/week?${key}&language=en-US`);

  return res.data.results;
};

const getTopRated = async () => {
  const res = await movie.get(`/movie/top_rated?${key}&language=en-US`);

  return res.data.results;
};

const getHorror = async () => {
  const res = await movie.get(`/discover/movie?${key}&with_genres=27`);

  return res.data.results;
};

const getRomance = async () => {
  const res = await movie.get(`/discover/movie?${key}&with_genres=10749`);

  return res.data.results;
};

const getComedy = async () => {
  const res = await movie.get(`/discover/movie?${key}&with_genres=35`);

  return res.data.results;
};

const getAction = async () => {
  const res = await movie.get(`/discover/movie?${key}&with_genres=28`);

  return res.data.results;
};

const getDocumentaries = async () => {
  const res = await movie.get(`/discover/movie?${key}&with_genres=99`);

  return res.data.results;
};

export {
  getNetflixOriginal,
  getTrending,
  getTopRated,
  getHorror,
  getRomance,
  getComedy,
  getAction,
  getDocumentaries,
};
