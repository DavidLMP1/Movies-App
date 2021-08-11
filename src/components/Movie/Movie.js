import React, { Component } from "react";
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';


class Movie extends Component {


    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }

    render() {
        return (
            <div className="ctnmovie">
                <div className="card">
                    <img className="img" src={this.props.movie.Poster !== "N/A" ? this.props.movie.Poster:"https://images.cdn1.buscalibre.com/fit-in/360x360/dd/cc/ddcc709d0fa44d35e9c9497003926e42.jpg" } alt="Not Found" />
                    <div className="infohead">
                        <h4>{this.props.movie.Title}</h4>
                        <p>{this.props.movie.Plot}</p>
                        <div className="info">
                            <p>      Year:{this.props.movie.Year}</p>
                            <p>    Gender:{this.props.movie.Genre}</p>
                            <p>  Director:{this.props.movie.Director}</p>
                            <p>  Language:{this.props.movie.Language}</p>
                            <p> Productor:{this.props.movie.Productor}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);