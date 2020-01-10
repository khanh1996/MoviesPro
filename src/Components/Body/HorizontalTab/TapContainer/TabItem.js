import React, { Component } from 'react';

class TabItem extends Component {
    render() {
        return (
            <React.Fragment>
            <div className={this.props.className}>
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                       Item detail1
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        Item list1
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
            {/* <div className="tab2">
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                    Item detail2
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        Item list2
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>
            <div className="tab3"> 
                <div className="tab_movies_agileinfo">
                    <div className="w3_agile_featured_movies">
                    <div className="col-md-5 video_agile_player">
                    Item detail3
                    </div>
                    <div className="col-md-7 wthree_agile-movies_list">
                        Item list3
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="cleafix" />
                </div>	
            </div>*/}
            
            </React.Fragment>
        );
    }
}

export default TabItem;