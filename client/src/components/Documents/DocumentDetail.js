import DocumentCreateForm from './DocumentCreateForm.js';
import DocumentUpdate from './DocumentUpdate.js';
import React, { useState, useEffect } from 'react';


function DocumentDetail(props) {
    /** State */
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    /** Props */
    const { id, type, update } = props;
    console.log(update);
    /** Effect API */
    useEffect(() => {
        if (id) {
            fetch(`/api/document?id=${id}`)
                .then(res => res.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                })
        }
        if (update) {
            fetch(`/api/document?update=${update}`)
                .then(res => res.json())
                .then(doc => {
                    setIsLoaded(true);
                    setData(doc);
                })
        }
    }, [id, update])

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

    if (!isLoaded) {
        return (
            <>Loading ...</>
        );
    }
    if (!data) {
        return (
            <>data is null</>
        )
    }
    if (update) {
        console.log(data);
        return (
            <>
                <DocumentUpdate />
            </>
        )
    }
    if (!id) {
        return (
            <>
                <DocumentCreateForm type={type}></DocumentCreateForm>
            </>
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