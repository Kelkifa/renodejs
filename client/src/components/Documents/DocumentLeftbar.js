import React from 'react';

function DocumentLeftbar(props) {
    return (
        <>
            <h2 className="doc__content__leftbar__item doc__content__leftbar__item--title">{props.type}</h2>
            {props.data ? props.data.map(doc => {
                return (
                    <div key={doc._id} className="doc__content__leftbar__item">{doc.parent_part.title}</div>
                )
            }) : ""}
        </>
    )
}

export default DocumentLeftbar;