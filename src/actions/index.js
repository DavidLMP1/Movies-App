export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}  
  
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=87fe3e8b&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=87fe3e8b&i="+id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}
