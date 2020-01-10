import React, { Component } from 'react';
import './TitleTab.css';
class TitleTab extends Component {
    render() {
        return (
            <ul className="resp-tabs-list">
                <li >Now Playing</li>
                <li >Popularity</li>
                <li >Top Rating</li>	
            </ul>
        );
    }
}

export default TitleTab;