function MovieCard(props){
    const { movie, updateMovies } = props;
    const deleteAction = ()=> updateMovies(movie._id);
    
    return( <div className="MovieCard">
                <h3>{movie.title}</h3>
                <p>Director: {movie.director}</p>
                <p>Rating: {movie.IMDBRating}</p>
                <button className="btn-delete" onClick={deleteAction}>Delete </button>
              </div>
            );

}

export default MovieCard;