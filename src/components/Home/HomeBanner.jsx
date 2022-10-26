import React, { useEffect, useState } from "react";
import { getNetflixOriginal } from "../../api/fetchMovie";

const style = {
  container: `h-[80vh]`,
  wrapper: `flex flex-col space-y-3 justify-center pl-10 md:pl-40 bg-dark/70 h-full w-full text-white`,
  title: `font-display text-4xl max-w-xs md:max-w-none md:text-6xl selection:bg-red`,
  btnWrapper: `font-display text-lg text-dark flex space-x-2 select-none`,
  btn: `bg-white/60 border border-transparent rounded-sm px-4 py-1 hover:bg-transparent hover:text-white hover:border-white transition-all duration-300`,
  description: `w-64 md:w-96 text-xs md:text-sm font-graph selection:bg-white selection:text-dark`,
};

const HomeBanner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getNetflixOriginal().then((data) =>
      setMovie(data[Math.floor(Math.random() * data.length - 1)])
    );

    return () => getNetflixOriginal;
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={style.container}
      style={{
        backgroundImage:
          movie &&
          `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {movie && (
        <div className={style.wrapper}>
          <h1 className={style.title}>{movie.name}</h1>
          <div className={style.btnWrapper}>
            <button className={style.btn}>Play</button>
            <button className={style.btn}>My List</button>
          </div>
          <p className={style.description}>{truncate(movie.overview, 150)}</p>
        </div>
      )}
    </header>
  );
};

export default HomeBanner;
