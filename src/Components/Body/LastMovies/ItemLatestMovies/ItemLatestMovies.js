import React, { Component } from 'react';
import Ratting from '../../../Ratting/Ratting';

class ItemLatestMovies extends Component {
 
    ItemLatestMovies = () =>{
        console.log("ItemLatestMovies:::")
    }
    render() {
        var { original_title, poster_path, backdrop_path, vote_average, release_date, href } = this.props;
        //console.log(this.props);
        return (
            <div className="item">
                <div className="w3l-movie-gride-agile w3l-movie-gride-slider ">
                    <a href="single.html" className="hvr-sweep-to-bottom"><img src={poster_path} title={original_title} className="img-responsive" alt={original_title} />
                        <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
                    </a>
                    {this.ItemLatestMovies()}
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                        <div className="w3l-movie-text">
                            <h6><a href="single.html">{original_title}</a></h6>							
                        </div>
                        <div className="mid-2 agile_mid_2_home">
                            <p>{release_date}</p>
                            <div className="block-stars">
                                <Ratting vote_average={vote_average} />
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="ribben one">
                        <p>NEW</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemLatestMovies;