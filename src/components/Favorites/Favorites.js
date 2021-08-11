import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index"

export class ConnectedList extends Component {

  render() {
    return (
      <div className="cnt1">
        <h3>FAVORITES</h3>
        <ul className="favlist1">
          {this.props.moviesLoaded && this.props.moviesLoaded.map(movie => (
            <div className="moviecardfav">
              <Link to={`/movie/${movie.id}`}>
                <img className="imgfav" src={movie.img !== "N/A" ? movie.img:"https://images.cdn1.buscalibre.com/fit-in/360x360/dd/cc/ddcc709d0fa44d35e9c9497003926e42.jpg" } alt="Not Found" />
              </Link>
              <p>{movie.title}</p>
              <button className="btnX" onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
