import React from "react";
import { Link } from "react-router-dom";

import img from '../images/login-page/img-01.png';
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Login = () => {

    return (

        <div className='container-fluid'>
            <div className="login-container-fluid text-center">
                <div className="login-container">
                    <Tilt options={defaultOptions} className="form-img d-flex align-middle">
                        <img src={img} alt="IMG" />
                    </Tilt>

                    <div className="login-content mb-3">
                        <h2 className="main-heading mb-3">Hola Mate</h2>
                        <h5 className="sub-heading mb-5">Sign In</h5>
                        <form className="form row needs-validation mt-4" noValidate>

                            <div className="col-md-12 mb-4">
                                <div className="form-floating has-validation">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="Email" required />
                                    <label htmlFor="floatingEmail">Email</label>
                                    <div id="valid-feedback"></div>
                                    <div className="invalid-feedback mb-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-floating has-validation">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                                    <label htmlFor="floatingPassword" className="form-label">Password</label>
                                    <div className="invalid-feedback mb-2 mx-3">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <button className="btn btn-primary" type="submit" name="signin" id="submit-btn">Submit</button>
                            </div>
                            <div>You don't have an account? <Link to="/register">Register</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;