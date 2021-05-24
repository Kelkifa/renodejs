import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
    clickHandler(link) {
        document.location = link;
    }
    render() {
        return (
            <div id="Navbar" className="Navbar">
                <div className="Navbar__list">
                    <h1 className="Navbar__list__h1" onClick={() => { this.clickHandler("/home") }}>
                        Home
                    </h1>
                </div>
                <div className="Navbar__list">
                    <h2 className="Navbar__list__h2" onClick={() => { this.clickHandler("/test") }}>
                        Test
                    </h2>
                    <h2 className="Navbar__list__h2" onClick={() => { this.clickHandler("/anime") }}>
                        Animes
                    </h2>
                    <h2 className="Navbar__list__h2" onClick={() => { this.clickHandler("/document") }}>
                        Documents
                    </h2>
                    <h2 className="Navbar__list__h2" onClick={() => { this.clickHandler("/word") }}>
                        Words
                    </h2>
                    <h2 className="Navbar__list__h2 Navbar__list__h2--outline" onClick={() => { this.clickHandler("/login") }}>
                        Sign in
                    </h2>
                </div>
            </div>
        )
    }
}

export default Navbar;