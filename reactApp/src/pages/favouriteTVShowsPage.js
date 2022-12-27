import React, { useContext } from "react";
import TVShowListPageTemplate from "../components/tvShowComponents/templateTVShowListPage";
import { TVShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'

import RemoveFromShowFavourites from "../components/cardIcons/removeFromShowFavourites";
//import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTVShowPage = () => {
  const {favourites: showIds } = useContext(TVShowContext);

  // Create an array of queries and run in parallel.
  const favouriteTVShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getTVShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const show = favouriteTVShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;

  return (
    <TVShowListPageTemplate
      title="Favourite Shows"
      show={show}
      action={(show) => {
        return (
          <>
            <RemoveFromShowFavourites show={show} />
           
          </>
        );
      }}
    />
  );
};

export default FavouriteTVShowPage;



