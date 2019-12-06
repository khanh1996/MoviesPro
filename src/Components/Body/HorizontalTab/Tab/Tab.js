import React, { Component } from 'react';

class Tab extends Component {
    
    render() {
        return (
            <ul className="resp-tabs-list">
                <li onClick={ this.onClick } >Recent</li>
                <li onClick={ this.onClick } >Popularity</li>
                <li onClick={ this.onClick } >Top Rating </li>	
            </ul>
        );
    }
}

export default Tab;