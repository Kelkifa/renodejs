import React, { useState, useEffect } from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';
import DocumentDetail from './DocumentDetail.js';


function DocumentContent(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    // const [chilData, setChilData] = useState(null)
    useEffect(() => {
        if (props.query.type) {
            fetch(`/api/document?type=${props.query.type}`)
                .then(response => response.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                });
        }
    }, [props.query.type, props.query.id])

    if (!isLoaded && props.query.type) {
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <div className="doc__content">
            {props.query.type ?
                <>
                    <div className="doc__content__leftbar">
                        <DocumentLeftbar data={data} type={props.query.type} />
                    </div>
                    <div className="doc__content__detail">
                        <DocumentDetail cp={props.query.id} />
                    </div>
                </>
                : "Nothing"
            }
        </div>
    )
}

export default DocumentContent;