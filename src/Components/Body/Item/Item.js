import React, { Component } from 'react';
import Ratting from '../../Ratting/Ratting';

class Item extends Component {

    GetYearOfReleaseDate = (release_date) => {
        var year = parseInt(release_date); // get year in string date
        return year;
    }
    render() {
        const {id,poster_path,vote_average,release_date ,original_title } = this.props;

        let poster_path_flag = false;
        if (poster_path=== 'http://image.tmdb.org/t/p/w500null') {
            poster_path_flag = false;
        }else{
            poster_path_flag = true;
        }
        return (
            <React.Fragment>
                <a href={id} className="hvr-sweep-to-bottom">
                    { poster_path_flag ?  <img src={poster_path} title={original_title} className="img-responsive" alt={original_title} /> : <img style={{height: "350px"}} src="https://netflixroulette.files.wordpress.com/2013/01/image-not-found.gif" title="Image result for image not found" className="img-responsive" alt="Image result for image not found" />  }
                <div className="w3l-action-icon">
                    <i className="fa fa-play-circle-o" aria-hidden="true" />
                </div>
                </a>
                <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                        <h6><a href="single.html">{original_title}</a></h6>						
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                        <p>{this.GetYearOfReleaseDate(release_date)}</p>
                        <div className="block-stars">
                            <Ratting vote_average={vote_average} />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                <div className="ribben">
                    <p>NEW</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Item;