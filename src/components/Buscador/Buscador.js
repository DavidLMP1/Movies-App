import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions/index"

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cnt">
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title"></label>
            <input
              className="input"
              placeholder="Movie name"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="fcbutton" type="submit">SEARCH</button>
        </form>
        {this.props.movies && this.props.movies.map(movie => (
          <div className="moviecard" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img className="cardImage" src={movie.Poster !== "N/A" ? movie.Poster:"https://images.cdn1.buscalibre.com/fit-in/360x360/dd/cc/ddcc709d0fa44d35e9c9497003926e42.jpg" } alt="" />
            </Link>
            <div className="cardhead">
              <p className="cardname">{movie.Title}</p>
              <button onClick={() => this.props.addMovieFavorite({ title: movie.Title, id: movie.imdbID, img: movie.Poster })} className="btnfav">FAV</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

