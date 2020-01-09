import React, { Component } from 'react';
import TabItemRecent from './TabItemRecent';
import TabItemPopularity from './TabItemPopularity';
import TabItemTopRating from './TabItemTopRating';
import TabItem from './TabItem';

class TabContainer extends Component {
    __renderTab = () => {
        const array = [];
        // for (let index = 0; index < 3; index++) {
        //     const element = array[index];
        //      element = <TabItem/>;
        // }
        console.log(array);
        
    }
    render() {
        return (
            <div className="resp-tabs-container">
                <TabItemRecent/>
                <TabItemPopularity/>
                <TabItemTopRating/>
                {/* { this.__renderTab()} */}
            </div>
        );
    }
}

export default TabContainer;