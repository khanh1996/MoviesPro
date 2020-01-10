import React, { Component } from 'react';
import TabItemRecent from './TabItemRecent';
import TabItemPopularity from './TabItemPopularity';
import TabItemTopRating from './TabItemTopRating';
import TabItem from './TabItem';

class TabContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tabs : []
        }
    }
    
    __renderTab = () => {
        const {tab} = this.state;
        const array = [];
        const itemDetailRecentMovie = this.state.tabs.map((product,index) => {
            console.log(product);
        });
        console.log(itemDetailRecentMovie);
    }
    render() {
        return (
            <div className="resp-tabs-container">
                {/* <TabItemRecent/>
                <TabItemPopularity/>
                <TabItemTopRating/> */}
                <TabItem className="tap1"/>
                <TabItem className="tap2"/>
                <TabItem className="tap3"/>
            </div>
        );
    }
}

export default TabContainer;