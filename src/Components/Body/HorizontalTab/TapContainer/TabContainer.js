import React, { Component } from 'react';
import TabItemRecent from './TabItemRecent';
import TabItemPopularity from './TabItemPopularity';
import TabItemTopRating from './TabItemTopRating';

class TabContainer extends Component {
    render() {
        return (
            <div className="resp-tabs-container">
                <TabItemRecent/>
                <TabItemPopularity/>
                <TabItemTopRating/>
            </div>
        );
    }
}

export default TabContainer;