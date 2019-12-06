import React, { Component } from 'react';
import Ratting from '../../../Ratting/Ratting';


class ItemRequestMovie extends Component {


    render() {
        var { image, name, year } = this.props;
        return (
            <div className="col-md-2 w3l-movie-gride-agile requested-movies">
                <a href="single.html" className="hvr-sweep-to-bottom"><img src={image} title="Movies Pro" className="img-responsive" alt={name} />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle-o" aria-hidden="true" /></div>
                </a>
                <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                        <h6><a href="single.html">{name} </a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                        <p>{year}</p>
                        <div className="block-stars">
                            <Ratting ratting={this.props.ratting} />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                <div className="ribben one">
                    <p>NEW</p>
                </div>
            </div>
        );
    }
}

export default ItemRequestMovie;