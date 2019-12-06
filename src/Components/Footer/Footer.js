import React, { Component } from 'react';
import Contact from './Contact/Contact';

class Footer extends Component {
    render() {
        return (
            <div>
            {/*/footer-bottom*/}
                <div className="contact-w3ls" id="contact">
                    {/* contact*/}
                    <Contact/>
                </div>
                <div className="w3agile_footer_copy">
                    <p>© 2017 Movies Pro. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
                <a href="#home" id="toTop" className="scroll" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
            </div>
        );
    }
}

export default Footer;