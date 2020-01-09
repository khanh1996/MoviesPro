import React, { Component } from 'react';

class TabItem extends Component {
    render() {
        return (
            <div className="tab1">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                       {/* { this.__itemDetailRecentMovie()} */}
                       Item detail
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        {/* { this.__listItemRecentMovie() } */}
                        Item list
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
            
        );
    }
}

export default TabItem;