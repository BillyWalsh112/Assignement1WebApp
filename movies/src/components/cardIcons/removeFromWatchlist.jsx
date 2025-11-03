import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import IconButton from "@mui/material/IconButton";

const RemoveFromWatchlistIcon = ({ movie }) => {
        const context = useContext(MoviesContext);

        const handleRemove = (e) => {
         e.preventDefault();
        context.removeFromWatchlist(movie);
          };

            return (
    <IconButton aria-label="remove from watchlist" onClick={handleRemove}>
      <PlaylistRemoveIcon color="secondary" />
    </IconButton>
  );
};

export default RemoveFromWatchlistIcon;