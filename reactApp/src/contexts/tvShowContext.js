import React, { useState } from "react";

export const TVShowContext = React.createContext(null);

const TVShowProvider = (props) => {
  // const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  //const [watchList, setWatchList] = useState( [] )
  

  const addToShowFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);
  };



  // const addReview = (show, review) => {
  //   setMyReviews( {...myReviews, [show.id]: review } )
  // };


  
  const removeFromShowFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) )
  };

 return (
    <TVShowContext.Provider
      value={{
        favourites,
        // watchList,
        // addToWatchList,
        addToShowFavourites,
        removeFromShowFavourites,
        // addReview,
      }}
    >
      {props.children}
    </TVShowContext.Provider>
  );
};

export default TVShowProvider;