import React, { useContext } from "react";
import PageTemplate from "../components/movieComponents/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import WriteReview from "../components/cardIcons/writeReview";

import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import PlaylistAddIcon from "../components/cardIcons/playlistAddIcon";

const WatchListPage = () => {
  const {watchList: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchListQueries = useQueries(
    movieIds.map((movieId) => {
      //console.log(movieId)
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );


  // Check if any of the parallel queries is still loading.
  const isLoading = watchListQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = watchListQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Watch List"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchListPage;