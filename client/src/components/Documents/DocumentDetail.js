import React, { useState, useEffect } from 'react';

function DocumentDetail(props) {
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

    if (!props.cp) {
        return (
            <div>Nothing</div>
        )
    }
    if (!isLoaded) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <>
            <div>Hello</div>
        </>
    )
}

export default DocumentDetail;