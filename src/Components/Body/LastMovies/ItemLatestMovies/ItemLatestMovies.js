import React, { Component } from 'react';
import Ratting from '../../../Ratting/Ratting';

class ItemLatestMovies extends Component {
 
    ItemLatestMovies = () =>{
        //console.log("ItemLatestMovies:::")
    }
    render() {
        var { original_title, poster_path, backdrop_path, vote_average, release_date, href } = this.props;
        //console.log(this.props);
        let backdrop_path_flag = false;
        if (backdrop_path === 'http://image.tmdb.org/t/p/w500null') {
            backdrop_path_flag = false;
        }else{
            backdrop_path_flag = true;
        }
        return (
            <div className="item">
                <div className="w3l-movie-gride-agile w3l-movie-gride-slider ">
                    <a href="single.html" className="hvr-sweep-to-bottom">
                        { backdrop_path_flag ?  <img src={poster_path} title={original_title} className="img-responsive" alt={original_title} /> : <img style={{height: "492px"}} src="https://netflixroulette.files.wordpress.com/2013/01/image-not-found.gif" title="Image result for image not found" className="img-responsive" alt="Image result for image not found" />  }
                        <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
                    </a>
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