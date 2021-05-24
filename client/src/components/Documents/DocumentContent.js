// import { useLocation } from "react-router-dom";


import './DocumentContent.scss';
import DocumentDetail from './DocumentDetail.js';
import DocumentCreateForm from './DocumentCreateForm.js';
import React, { useState, useEffect } from 'react';



function DocumentContent(props) {
    /** State */
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        if (props.query.type)
            fetch(`/api/document?type=${props.query.type}&id=${props.query.id}`)
                .then(response => response.json())
                .then(data => {
                    if (data != '') {
                        setLoaded(true);
                        setData(data);
                    }
                });
    }, [props.query.type, props.query.id]);


    if (isLoaded) {
        if (props.query.id) {
            return <DocumentDetail>{data}</DocumentDetail>
        }
        return (
            <DocumentCreateForm></DocumentCreateForm>
        )
    }

    return (
        <div>Loading ...</div>
    )
}

export default DocumentContent;
