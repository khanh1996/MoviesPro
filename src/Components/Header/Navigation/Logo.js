import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                </button>
                <h1><a href="index.html"><span>M</span>ovies <span>P</span>ro</a></h1>
            </div>
        );
    }
}

export default Logo;