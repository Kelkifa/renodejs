import { Link } from 'react-router-dom';


function DocumentNavbar(props) {

    /** Render */
    return (
        <div className="doc__navbar">
            <div className="doc__navbar__item">
                <Link to="/document?type=NodeJS" style={{ textDecoration: "none", color: "white" }}>
                    NodeJS
                    </Link>
            </div>
            <div className="doc__navbar__item">
                <Link to="/document?type=ReactJS" style={{ textDecoration: "none", color: "white" }}>
                    ReactJS
                    </Link>
            </div>
            <div className="doc__navbar__item">
                <Link to="/document?type=Javascript" style={{ textDecoration: "none", color: "white" }}>
                    Javascript
                        </Link>
            </div>
            <div className="doc__navbar__item">
                <Link to="?type=CSS" style={{ textDecoration: "none", color: "white" }}>
                    CSS
                    </Link>
            </div>
            <div className="doc__navbar__item">
                <Link to="/document?type=PHP" style={{ textDecoration: "none", color: "white" }}>
                    PHP
                    </Link>
            </div>
            <div className="doc__navbar__item">
                <Link to="/document?type=IOT" style={{ textDecoration: "none", color: "white" }}>
                    IOT
                    </Link>
            </div>
        </div >
    );
}


export default DocumentNavbar;