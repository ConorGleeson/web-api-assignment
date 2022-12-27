import React from "react";
import { getTopRated } from "../api/tmdb-api";
import PageTemplate from '../components/movieComponents/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'



const TopRatedMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('getTopRated', getTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(movies)

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites   = (movieId) => true 

  return (
    <PageTemplate
      title="Best Of All Time!"
      movies={movies}
      
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};

export default TopRatedMoviesPage;



