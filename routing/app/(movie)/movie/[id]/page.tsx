export default function MovieDetail({ params: { id } }) {
  console.log(id);
  return <h1>Movie Detail {id}</h1>;
}
