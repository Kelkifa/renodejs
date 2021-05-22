import React from 'react';
import './Navbar.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavButton from './NavButton.js';

class Navbar extends React.Component {
    clickHandler() {
        console.log(1);
        // document.location = link;
    }
    render() {
        return (
            <Router>
                <div id="navbar">
                    <div className="left" >
                        <NavButton
                            btnClass="btn--nav"
                            name="Home"
                            link="/home"
                            elm="h1" />
                    </div>
                    <div className="right">
                        <NavButton
                            btnClass="btn--nav"
                            name="Test"
                            link="/test"
                            elm="h2" />
                        <NavButton
                            btnClass="btn--nav"
                            name="Words"
                            link="/home"
                            elm="h2" />
                        <NavButton
                            btnClass="btn--nav"
                            name="Documents"
                            link="/document"
                            elm="h2" />
                        <NavButton
                            btnClass="btn--nav"
                            name="Animes"
                            link="/anime"
                            elm="h2" />
                        <NavButton
                            btnClass="btn--nav btn--login"
                            name="Sign in"
                            link="/login"
                            elm="h2" />
                    </div>
                </div >
            </Router>
        )
    }
}

export default Navbar;