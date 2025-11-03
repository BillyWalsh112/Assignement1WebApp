import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromWatchlistIcon from "../components/cardIcons/removeFromWatchlist";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WatchlistMoviesPage = () => {
  const { watchlist: movieIds } = useContext(MoviesContext);

    const results = useQueries({
    queries: movieIds.map((id) => ({
      queryKey: ["movie", { id }],
      queryFn: getMovie,
    })),
  });

const isLoading = results.some((q) => q.isLoading);

if (isLoading) return <Spinner />;

const movies = results.map((r) => r.data);

  return (
    <PageTemplate
      title="My Watchlist"
      movies={movies}
      action={(movie) => <RemoveFromWatchlistIcon movie={movie} />}
    />
  );
};

export default WatchlistMoviesPage;