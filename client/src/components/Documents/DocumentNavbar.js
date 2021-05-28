import { Link } from 'react-router-dom';


function DocumentNavbar(props) {
    /** Props */
    const { types } = props;
    /** Render */
    return (
        <div className="doc__navbar">
            {
                types ? types.map(type => {
                    return (
                        <div key={type} className="doc__navbar__item">
                            <Link to="/document?type=NodeJS" style={{ textDecoration: "none", color: "white" }}>
                                {type}
                            </Link>
                        </div>
                    )
                }) : ""
            }
        </div >
    );
}


export default DocumentNavbar;