import { API_URL } from "../../../(home)/page";

export const metadata = {
  title: "Movie Detail",
};

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

async function getVideos(id) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieDetail({ params: { id } }) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  console.log(movie);
  console.log(videos);
  return <h1>{movie.title}</h1>;
}
