import React from "react";
import {
  getNetflixOriginal,
  getTrending,
  getTopRated,
  getHorror,
  getAction,
  getComedy,
  getRomance,
  getDocumentaries,
} from "../api/fetchMovie";
import GenreMovieList from "./GenreMovieList";
import HomeBanner from "./HomeBanner";
import Navbar from "./Navbar";

const style = {
  movieListWrapper: `mt-2`
}

const HomeScreen = () => {
  return (
    <div>
      <Navbar />

      <HomeBanner />

      <div 
        className={style.movieListWrapper}
      >
        <GenreMovieList
          title="Netflix Original"
          fetchMovie={getNetflixOriginal}
          isLarge={true}
        />

        <GenreMovieList 
          title="Weekly Trending" 
          fetchMovie={getTrending} 
        />

        <GenreMovieList 
          title="Top Rated" 
          fetchMovie={getTopRated} 
        />

        <GenreMovieList 
          title="Horror Movie" 
          fetchMovie={getHorror} 
        />
        
        <GenreMovieList 
          title="Action Movie" 
          fetchMovie={getAction} 
        />

        <GenreMovieList 
          title="Romance Movie" 
          fetchMovie={getRomance} 
        />

        <GenreMovieList 
          title="Comedy Movie" 
          fetchMovie={getComedy} 
        />

        <GenreMovieList 
          title="Documentaries" 
          fetchMovie={getDocumentaries} 
        />
      </div>
    </div>
  );
};

export default HomeScreen;
