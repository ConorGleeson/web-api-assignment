import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TVShowContext } from "../../contexts/tvShowContext";

const RemoveFromShowFavouritesIcon = ({ show }) => {
  const context = useContext(TVShowContext);

  const handleRemoveFromShowFavourites = (e) => {
    e.preventDefault();
    context.removeFromShowFavourites(show);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromShowFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromShowFavouritesIcon;