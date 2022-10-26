import React, { useEffect, useState } from "react";

const style = {
  wrapper: `px-4 select-none`,
  title: `font-display text-4xl pt-4`,
  listContainer: `max-w-[100vw] overflow-x-auto px-4 py-4`,
  listWrapper: `flex items-center space-x-8`,
  movieCard: `min-w-[150px] h-[300px] hover:scale-110 transition-all duration-300 group`,
  movieCardLarge: `min-w-[300px] h-[200px] hover:scale-110 transition-all duration-300 group`,
  cardTitleWrapper: `flex justify-center items-center h-full w-full group-hover:bg-dark/70 transition-all duration-300 ease-in-out group cursor-pointer`,
  cardTitle: `invisible group-hover:visible max-w-[60%] font-display text-2xl`,
};

const GenreMovieList = ({ title, fetchMovie, isLarge = false }) => {
  const [movies, setMovies] = useState();

  const base_url = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    fetchMovie().then((data) => setMovies(data));

    return () => fetchMovie();
  }, [fetchMovie]);


  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.listContainer}>
        <div className={style.listWrapper}>
          {movies &&
            movies.map((movie) => (
              <div
                key={movie.id}
                className={isLarge ? style.movieCardLarge : style.movieCard}
                style={{
                  backgroundImage: `url(${base_url}${
                    isLarge ? movie.backdrop_path : movie.poster_path
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className={style.cardTitleWrapper}>
                  <h1 className={style.cardTitle}>
                    {movie.name || movie.title}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GenreMovieList;
