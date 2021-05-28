import React from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';
import DocumentDetail from './DocumentDetail.js';


function DocumentContent(props) {
    /** Props */
    const { document, titles, type, updateFlag } = props;
    /** Effect */
    // useEffect(() => {
    //     if (type) {
    //         fetch(`/api/document?type=${type}`)
    //             .then(response => response.json())
    //             .then(doc => {
    //                 setIsLoaded(true);
    //                 setData(doc);
    //             });
    //     }
    // }, [type, id])

    // if (!isLoaded && type) {
    //     return (
    //         <div>Loading ...</div>
    //     )
    // }
    // return (
    //     <div className="doc__content">
    //         {type ?
    //             <>
    //                 <div className="doc__content__leftbar">
    //                     <DocumentLeftbar data={data} type={type} />
    //                 </div>
    //                 <div className="doc__content__detail">
    //                     <DocumentDetail id={id} type={type} update={update} />
    //                 </div>
    //             </>
    //             : "Nothing"
    //         }
    //     </div>
    // )

    /** Render */
    return (
        <div className="doc__content">
            {type ?
                <>
                    <div className="doc__content__leftbar">
                        <DocumentLeftbar titles={titles} type={type} />
                    </div>
                    <div className="doc__content__detail">
                        <DocumentDetail document={document} type={type} updateFlag={updateFlag} />
                    </div>
                </>
                : "Nothing"
            }
        </div>
    )
}

export default DocumentContent;