import React, { Component } from 'react';
import Ratting from '../../../../Ratting/Ratting';

class Item extends Component {

    render() {
        const {id,title,poster_path,vote_average,release_date  } = this.props
        return (           
            <div className="w3l-movie-gride-agile">
                <a href={id} className="hvr-sweep-to-bottom"><img src={poster_path} title="Movies Pro" className="img-responsive" alt={title} />
                <div className="w3l-action-icon">
                    <i className="fa fa-play-circle-o" aria-hidden="true" />
                </div>
                </a>
                <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                        <h6><a href="single.html">{this.props.name}	</a></h6>						
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                        <p>{release_date}</p>
                        <div className="block-stars">
                            <Ratting ratting={vote_average} />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                <div className="ribben">
                    <p>NEW</p>
                </div>
            </div>
        );
    }
}

export default Item;