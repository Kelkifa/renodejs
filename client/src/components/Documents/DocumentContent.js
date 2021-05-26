import React, { useState, useEffect } from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';
import DocumentDetail from './DocumentDetail.js';


function DocumentContent(props) {
    /** State */
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    /** Props */
    const { id, type, update } = props.query;

    useEffect(() => {
        if (type) {
            fetch(`/api/document?type=${type}`)
                .then(response => response.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                });
        }
    }, [type, id])

    if (!isLoaded && type) {
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <div className="doc__content">
            {type ?
                <>
                    <div className="doc__content__leftbar">
                        <DocumentLeftbar data={data} type={type} />
                    </div>
                    <div className="doc__content__detail">
                        <DocumentDetail id={id} type={type} update={update} />
                    </div>
                </>
                : "Nothing"
            }
        </div>
    )
}

export default DocumentContent;