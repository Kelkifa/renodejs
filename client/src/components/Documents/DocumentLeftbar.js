import React from 'react';
import DocumentLeftbarTitle from './DocumentLeftbarTitle.js';
import { Link } from 'react-router-dom';

function DocumentLeftbar(props) {
    /** Props */
    // const { type } = props;
    const { titles, type } = props;
    /** Render */
    return (
        <>
            <Link to={`/document?type=${type}`} style={{ textDecoration: "none", color: "black" }}>
                <h2 className="doc__content__leftbar__item doc__content__leftbar__item--title">{type}</h2>
            </Link>
            {titles ? titles.map(title => {
                return (
                    <DocumentLeftbarTitle key={title._id} title={title.parent_part.title} id={title._id} type={type} />
                )
            }) : ""}
        </>
    )
}

export default DocumentLeftbar;