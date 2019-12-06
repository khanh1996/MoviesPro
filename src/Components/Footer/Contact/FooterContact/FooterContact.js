import React, { Component } from 'react';

class FooterContact extends Component {
    render() {
        return (
            <div className="footer-contact">
                <form action="" method="post">
                    <input type="email" name="Email" placeholder="Enter your email...." required=" " />
                    <input type="submit" defaultValue="Subscribe" />
                </form>
            </div>
        );
    }
}

export default FooterContact;