import DocumentCreateForm from './DocumentCreateForm.js';
import React, { useState, useEffect } from 'react';


function DocumentDetail(props) {
    const [CpCount, setCpCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.cp) {
            fetch(`/api/document?id=${props.cp}`)
                .then(res => res.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                })
        }
    }, [props.cp])

    // render
    if (!props.cp) {
        return (
            <div>
                <DocumentCreateForm CpCount={CpCount}></DocumentCreateForm>
            </div>
        )
    }
    if (!isLoaded) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <div>Hello</div>
    )
}

export default DocumentDetail;