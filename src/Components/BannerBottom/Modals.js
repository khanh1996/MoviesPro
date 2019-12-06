import React, { Component } from 'react';

class Modals extends Component {
    render() {
        return (
            
            <div>
            {/* Modal1 */}
                <div className="modal fade" id="myModal4" tabIndex={-1} role="dialog">
                <div className="modal-dialog">
                    
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4>Login</h4>
                    <div className="login-form">
                        <form action="index.html" method="post">
                        <input type="email" name="email" placeholder="E-mail" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <div className="tp">
                            <input type="submit" defaultValue="LOGIN NOW" />
                        </div>
                        <div className="forgot-grid">
                            <div className="log-check">
                            <label className="checkbox"><input type="checkbox" name="checkbox" />Remember me</label>
                            </div>
                            <div className="forgot">
                            <a href="index.html" data-toggle="modal" data-target="#myModal2">Forgot Password?</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* //Modal1 */}
            {/* Modal1 */}
                <div className="modal fade" id="myModal5" tabIndex={-1} role="dialog">
                <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4>Register</h4>
                    <div className="login-form">
                        <form action="index.html" method="post">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="E-mail" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="password" name="conform password" placeholder="Confirm Password" required />
                        <div className="signin-rit">
                            <span className="agree-checkbox">
                            <label className="checkbox"><input type="checkbox" name="checkbox" />I agree to your <a className="w3layouts-t" href="index.html" target="_blank">Terms of Use</a> and <a className="w3layouts-t" href="index.html" target="_blank">Privacy Policy</a></label>
                            </span>
                        </div>
                        <div className="tp">
                            <input type="submit" defaultValue="REGISTER NOW" />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* //Modal1 */}
            </div>
        );
    }
}

export default Modals;