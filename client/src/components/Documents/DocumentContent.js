import React, { useState, useEffect } from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';


function DocumentContent(props) {
    var [isLoaded, setLoaded] = useState(false);
    var [data, setData] = useState('');

    useEffect(() => {
        if (props.query.type)
            fetch(`/api/document?type=${props.query.type}&id=${props.query.id}/`)
                .then((response => response.json()))
                .then(doc => {
                    setLoaded = true;
                    setData = doc;
                })
    }, [props.query.type, props.query.id])
    if (!isLoaded) {
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <div className="doc__content">
            <div className="doc__content__leftbar">
                <DocumentLeftbar>{data}</DocumentLeftbar>
            </div>
            <div className="doc__content__detail">

            </div>
        </div>
    )
}

export default DocumentContent;