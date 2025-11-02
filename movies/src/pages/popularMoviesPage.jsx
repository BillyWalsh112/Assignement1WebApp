import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default function PopularMoviesPage() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

    if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

    return (
    <PageTemplate
      title="Popular Movies"
      movies={data.results}
      action={(m) => <AddToFavoritesIcon movie={m} />}
    />
  );
}