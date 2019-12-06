import React, { Component } from 'react';

class LatestMovies extends Component {
    render() {
        return (
            <div className="col-md-2 footer-grid">
                <h4>Latest Movies</h4>
                <div className="footer-grid1">
                <div className="footer-grid1-left">
                    <a href="single.html"><img src="assets/images/1.jpg" alt=" " className="img-responsive" /></a>
                </div>
                <div className="footer-grid1-right">
                    <a href="single.html">eveniet ut molesti</a>
                </div>
                <div className="clearfix"> </div>
                </div>
                <div className="footer-grid1">
                <div className="footer-grid1-left">
                    <a href="single.html"><img src="assets/images/2.jpg" alt=" " className="img-responsive" /></a>
                </div>
                <div className="footer-grid1-right">
                    <a href="single.html">earum rerum tenet</a>
                </div>
                <div className="clearfix"> </div>
                </div>
                <div className="footer-grid1">
                <div className="footer-grid1-left">
                    <a href="single.html"><img src="assets/images/4.jpg" alt=" " className="img-responsive" /></a>
                </div>
                <div className="footer-grid1-right">
                    <a href="single.html">eveniet ut molesti</a>
                </div>
                <div className="clearfix"> </div>
                </div>
                <div className="footer-grid1">
                <div className="footer-grid1-left">
                    <a href="single.html"><img src="assets/images/3.jpg" alt=" " className="img-responsive" /></a>
                </div>
                <div className="footer-grid1-right">
                    <a href="single.html">earum rerum tenet</a>
                </div>
                <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

export default LatestMovies;