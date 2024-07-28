import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  console.log(movie);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.poster}>⭐{movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
