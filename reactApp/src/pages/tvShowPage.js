import React from "react";
import { getTVShows } from "../api/movie-api";
import TVShowListPageTemplate from '../components/tvShowComponents/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToShowFavouritesIcon from '../components/cardIcons/addToShowFavouritesIcon'

const TVShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover-shows', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const show = data;


  // Redundant, but necessary to avoid app crashing.
  // const favourites = show.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToShowFavourites = (showId) => true 

  return (
    <TVShowListPageTemplate
      title="Discover shows"
      show={show}
      action={(show) => {
        return <AddToShowFavouritesIcon show={show} />
      }}
    />  ///make a version of favourites icon for tv shows
  );
};
export default TVShowPage; 