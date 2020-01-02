import React, { Component } from 'react';

class RespTapContainer extends Component {
    render() {
        return (
            <div className="tab3">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                        <div className="col-md-5 video_agile_player">
                        <div className="video-grid-single-page-agileits">
                            <div data-video="f2Z65fobH2I" id="video">
                                <img src="assets/images/44.jpg" alt="" className="img-responsive" />
                            </div>
                        </div>
                        <div className="player-text">
                            <div className="fexi_header">Storks</div>
                            <div className="fexi_header_para fix-text-3-line">
                                <span className="conjuring_w3">Story Line<label>:</label></span>Starring: Andy Samberg, Jennifer Aniston, Ty Burrell Storks Official Trailer 3 (2016) - Andy Samberg Movie the company's top delivery stork, lands in hot water when the Baby Factory produces an adorable.......
                            </div>
                            <div className="fexi_header_para"><span>Release On<label>:</label></span>Aug 1, 2016 </div>
                            <div className="fexi_header_para">
                                <span>Genres<label>:</label></span> {/* {this.renderGenres()} */}
                                <a href="genre.html">Drama</a> | 
                                <a href="genre.html">Adventure</a> | 
                                <a href="genre.html">Family</a>
                            </div>

                            <div className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                                <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                                <a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a>
                                <a href="index.html"><i className="fa fa-star-half-o" aria-hidden="true" /></a>
                                <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                <a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7 wthree_agile-movies_list">
                            <div className="w3l-movie-gride-agile">
                                <a href="single.html" className="hvr-sweep-to-bottom"><img src="assets/images/m8.jpg" title="Movies Pro" className="img-responsive" alt=" " />
                                    <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
                                </a>
                                <div className="mid-1 agileits_w3layouts_mid_1_home">
                                    <div className="w3l-movie-text">
                                        <h6><a href="single.html">Timeless</a></h6>							
                                    </div>
                                    <div className="mid-2 agile_mid_2_home">
                                        <p>2016</p>
                                        <div className="block-stars">
                                            <ul className="w3l-ratings">
                                            <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                            <li><a href="index.html"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                            <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                            <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                            <li><a href="index.html"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                                        </ul>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                <div className="ribben">
                                <p>NEW</p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
        );
    }
}

export default RespTapContainer;