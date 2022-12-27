import React from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/movieComponents/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import AddToPlaylistAddIcon from "../components/cardIcons/playlistAddIcon";

const UpcomingMovies = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites   = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistAddIcon movie={movie} />
      }}
    />
);
};

export default UpcomingMovies;


// import React, { useState, useEffect } from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import {getUpcoming } from "../api/tmdb-api";

// const UpcomingMovies = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favourites = movies.filter((m) => m.favourite);
//   localStorage.setItem("favourites", JSON.stringify(favourites));

//   const addToFavourites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favourite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getUpcoming().then(movies => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <PageTemplate
//       title="Upcoming Movies"
//       movies={movies}
//       selectFavourite={addToFavourites}
//     />
//   );
// };
// export default UpcomingMovies;