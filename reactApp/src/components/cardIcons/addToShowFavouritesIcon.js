import React, { useContext } from "react";
import { TVShowContext } from "../../contexts/tvShowContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToShowFavouritesIcon = ({ show }) => {
  const context = useContext(TVShowContext);

  const handleAddToShowFavourites = (e) => {
    e.preventDefault();
    context.addToShowFavourites(show);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToShowFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToShowFavouritesIcon;