"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)).json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
      <h1>hello</h1>
    </div>
  );
}
