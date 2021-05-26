import React, { useState, useEffect } from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';
function DocumentUpdate(props) {
    /** State */
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    /** Props */
    const id = props.id;

    /** Effect */
    useEffect(() => {
        if (id) {
            fetch(`/api/document/${id}/update`)
                .then(response => response.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                })
        }
    }, [id])


    /** Render */
    return (
        <div className="doc__content__lefbar">
            <DocumentLeftbar data={data} />
        </div>
    );
}

export default DocumentUpdate;