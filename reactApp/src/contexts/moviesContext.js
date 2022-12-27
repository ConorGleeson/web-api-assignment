
import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )

  //pagination
  const [pageNumber, setPageNumber] = useState([])
  
  const setPageNum = (num) =>
{
  setPageNumber(num)
  //console.log(number)//undefined why???????????????
}
  

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList];
    if (!watchList.includes(movie.id)) {
      newWatchList.push(movie.id);
    }
    setWatchList(newWatchList);
  };


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };


  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        watchList,
        addToWatchList,
        addToFavourites,
        removeFromFavourites,
        addReview,
        //paginaiton
        pageNumber,
        setPageNum
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;