import React, {useContext} from "react";
import { getMovies } from "../api/movie-api";
import PageTemplate from '../components/movieComponents/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

//paginaiton
import { MoviesContext } from "../contexts/moviesContext";
import { useParams } from "react-router-dom";

const HomePage = (props) => {

 
  const {setPageNum} = useContext(MoviesContext);
  const {pageNum} = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['discover', {pageNum:pageNum}],  getMovies)
  setPageNum(pageNum)
  


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data;
  console.log(movies)

  // // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};

export default HomePage;