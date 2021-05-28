import DocumentForm from './DocumentForm.js';
import React, { useState, useEffect } from 'react';


function DocumentDetail(props) {
    /** State */
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [data, setData] = useState(null);

    /** Props */
    const { document, type, updateFlag } = props;


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

    if (updateFlag) {
        return (
            <>
                <DocumentForm type={type} ></DocumentForm>
            </>
        )
    }
    if (!document) {
        return (
            <div>
                document is null
            </div>
        )
    }
    return (
        <div>
            hello detail
        </div>
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