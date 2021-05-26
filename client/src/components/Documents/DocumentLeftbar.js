import React from 'react';
import DocumentLeftbarTitle from './DocumentLeftbarTitle.js';


function DocumentLeftbar(props) {
    return (
        <>
            <h2 className="doc__content__leftbar__item doc__content__leftbar__item--title">{props.type}</h2>
            {props.data ? props.data.map(doc => {
                return (
                    <DocumentLeftbarTitle key={doc._id} title={doc.parent_part.title} id={doc._id} type={props.type} />
                )
            }) : ""}
        </>
    )
}

export default DocumentLeftbar;