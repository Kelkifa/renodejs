import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
    clickHandler() {
        console.log(1);
        // document.location = link;
    }
    render() {
        return (
            <div id="Navbar" className="Navbar">
                <div className="Navbar__list">
                    <h1 className="Navbar__list__h1">
                        Home
                    </h1>
                </div>
                <div className="Navbar__list">
                    <h2 className="Navbar__list__text">
                        Test
                    </h2>
                    <h2 className="Navbar__list__text">
                        Animes
                    </h2>
                    <h2 className="Navbar__list__text">
                        Documents
                    </h2>
                    <h2 className="Navbar__list__text">
                        Words
                    </h2>
                    <h2 className="Navbar__list__text Navbar__list__text--outline">
                        Sign in
                    </h2>
                </div>
            </div>
        )
    }
}

export default Navbar;