import DocumentCreateForm from './DocumentCreateForm.js';
import React, { useState, useEffect } from 'react';


function DocumentDetail(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.id) {
            fetch(`/api/document?id=${props.id}&type=${props.type}`)
                .then(res => res.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                })
        }
    }, [props.id, props.type])

    /** Render */
    function processContent(chilPart) {
        return chilPart.content.map((content, y) => {
            return (
                <div key={content}>
                    {chilPart.sort[y] ?
                        <img src={content} alt="Fail" />
                        :
                        <div>
                            {processText(content)}
                        </div>
                    }
                </div>
            )
        })
    }
    function processText(content) {
        var arr = content.split("\n");
        return arr.map(value => {
            return (
                <div key={value}>{value}</div>
            )
        })
    }

    if (!props.id) {
        return (
            <div>
                <DocumentCreateForm type={props.type}></DocumentCreateForm>
            </div>
        )
    }
    if (!isLoaded) {
        return (
            <div>Loading ...</div>
        );
    }
    if (!data) {
        return (
            <div>data is null</div>
        )
    }
    const document = data.document;
    return (
        <>
            <h2 className="doc__detail__headerI">{document.parent_part.title}</h2>
            <div className="doc__detail__content">
                {document.children_parts.map((chilPart, index) => {
                    return (
                        <div key={chilPart.index}>
                            <h3>{chilPart.index}. {chilPart.title} </h3>
                            {processContent(chilPart)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DocumentDetail;