import React, { Component } from 'react';

class MoviesCategory extends Component {
    render() {
        return (
            <div className="col-md-2 footer-grid">
                <h4>Movies</h4>
                <ul>
                <li><a href="genre.html">ADVENTURE</a></li>
                <li><a href="comedy.html">COMEDY</a></li>
                <li><a href="series.html">FANTASY</a></li>
                <li><a href="series.html">ACTION</a></li>
                <li><a href="genre.html">MOVIES</a></li>
                <li><a href="horror.html">HORROR</a></li>
                </ul>
            </div>
        );
    }
}

export default MoviesCategory;