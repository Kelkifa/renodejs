import DocumentForm from './DocumentForm.js';
import React, { useState, useEffect } from 'react';


function DocumentDetail(props) {
    // /** Props */
    const { id, update } = props;
    /** State */
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});
    /** Effect */
    useEffect(() => {
        if (update) {
            fetch(`/api/document?update=${update}`)
                .then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setData({ ...response });
                });
        }
        else if (id) {
            fetch(`/api/document?id=${id}`)
                .then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setData({ ...response });
                });
        }
    }, [id, update]);
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
    if (!id && !update) {  //form create 
        console.log("document create")
        return (
            <DocumentForm document={data.document} updateFlag={0} />
        )
    }
    if (update) {   //form update
        console.log("document update")
        return (
            <>
                <DocumentForm document={data.document} updateFlag={1} />
            </>
        )
    }
    if (!data.document) {
        return (
            <>
                document is null
            </>
        )
    }
    if (!data.success) {
        return (
            <>
                Server error: {data.message}
            </>
        )

    }
    return (
        <>
            <h2 className="doc__detail__headerI">{data.document.parent_part.title}</h2>
            <div className="doc__detail__content">
                {data.document.children_parts.map((chilPart, index) => {
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

// if (!id && !update) {
//     return (
//         <>
//             <DocumentForm type={type} ></DocumentForm>
//         </>
//     )
// }
// if (!isLoaded) {
//     return (
//         <>Loading ...</>
//     );
// }
// if (!data) {
//     return (
//         <>data is null</>
//     )
// }
// if (update) {
//     return (
//         <>
//             <DocumentForm type={type} data={data.document} />
//         </>
//     )
// }


// const document = data.document;
// return (
//     <>
//         <h2 className="doc__detail__headerI">{document.parent_part.title}</h2>
//         <div className="doc__detail__content">
//             {document.children_parts.map((chilPart, index) => {
//                 return (
//                     <div key={chilPart.index}>
//                         <h3>{chilPart.index}. {chilPart.title} </h3>
//                         {processContent(chilPart)}
//                     </div>
//                 )
//             })}
//         </div>
//     </>
// )