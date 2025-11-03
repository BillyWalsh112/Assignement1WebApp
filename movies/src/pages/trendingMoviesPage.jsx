import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

export default function TrendingMoviesPage() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingMovies,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={data.results}
      action={(m) => (
        <>
          <AddToFavoritesIcon movie={m} />
          <AddToWatchlistIcon movie={m} />
        </>
      )}
    />
  );
}
