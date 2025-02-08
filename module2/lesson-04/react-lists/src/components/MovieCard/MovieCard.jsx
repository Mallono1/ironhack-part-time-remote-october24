function MovieCard(props) {
  const { movie, updateMovies } = props;
  const deleteAction = () => updateMovies(movie._id);

  function generateScoreLabel(score) {
    if (score > 9) {
      return <span className="green">9+</span>;
    } else if (score < 7) {
      return <span className="red">{score}</span>;
    } else {
      return <span className="black">{score}</span>;
    }
  }

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>
      {movie.hasOscars && <p>Got the Oscar Award! </p>}
      {!movie.hasOscars && <p>Great movie but no Oscars! </p>}
      {/* {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars! </p>} */}
      <button className="btn-delete" onClick={deleteAction}>
        Delete{" "}
      </button>
    </div>
  );
}

export default MovieCard;
