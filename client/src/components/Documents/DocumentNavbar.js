import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function DocumentNavbar(props) {
    /** Props */
    const { types } = props;
    /** Render */
    const content = types ? types.map(type => {
        return (
            <div key={type} className="doc__navbar__item">
                <Link to={`/document?type=${type}`} style={{ textDecoration: "none", color: "white" }}>
                    {type}
                </Link>
            </div>
        )
    }) : "";

    return (
        <div className="doc__navbar">
            {content}
        </div >
    );
}


export default DocumentNavbar;




