import React, { Component } from 'react';
import BottomLinkFooter from './BottomLinkFooter/BottomLinkFooter';
import Release from './Release/Release';
import MoviesCategory from './MoviesCategory/MoviesCategory';
import TagReviewMovies from './TagReviewMovies/TagReviewMovies';
import LatestMovies from './LatestMovies/LatestMovies';
import MoviesPro from './MoviesPro/MoviesPro';

class FooterGrids extends Component {
    render() {
        return (
            <div className="footer-grids w3-agileits">
                {/* Release */}
                <Release/>
                {/* Movies Category */}
                <MoviesCategory/>
                {/* Tag review movies */}
                <TagReviewMovies/>
                {/* Latest Movies */}
                <LatestMovies/>
                {/* Movies Pro */}
                <MoviesPro/>
                <div className="clearfix"> </div>
                
                <BottomLinkFooter/>
            </div>
        );
    }
}

export default FooterGrids;