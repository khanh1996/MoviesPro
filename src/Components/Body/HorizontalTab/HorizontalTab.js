import React, { Component } from 'react';
import TitleTab from './Tab/TitleTab';
import TabContainer from './TapContainer/TabContainer';

class HorizontalTab extends Component {
    render() {
        return (
            <div id="horizontalTab">
                {/* Show tap home page  */}
                <TitleTab/>
                <TabContainer/>
                
            </div>
        );
    }
}

export default HorizontalTab;