import React, { Component } from 'react';
import FooterContact from './FooterContact/FooterContact';
import FooterGrids from './FooterGrids/FooterGrids';
import FooterSocial from './FooterSocial/FooterSocial';

class Contact extends Component {
    render() {
        return (
            <div className="footer-w3lagile-inner">
                <h2>Sign up for our <span>Newsletter</span></h2>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus 
                tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                {/* footer contact */}
                <FooterContact/>
                
                {/* Footer girds */}
                <FooterGrids/>
                <h3 className="text-center follow">Connect <span>Us</span></h3>
                {/* social */}
                <FooterSocial/>
            </div>	
        );
    }
}

export default Contact;