import React, { Component } from 'react';

class Release extends Component {
    render() {
        return (
            <div className="col-md-2 footer-grid">
                <h4>Release</h4>
                <ul> 
                    <li><a href="index.html" title="Release 2016">2016</a></li> 
                    <li><a href="index.html" title="Release 2015">2015</a></li>
                    <li><a href="index.html" title="Release 2014">2014</a></li> 
                    <li><a href="index.html" title="Release 2013">2013</a></li> 
                    <li><a href="index.html" title="Release 2012">2012</a></li>
                    <li><a href="index.html" title="Release 2011">2011</a></li> 
                </ul>
            </div>
        );
    }
}

export default Release;