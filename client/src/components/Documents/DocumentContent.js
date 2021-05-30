import { useState, useEffect } from 'react';
import DocumentLeftbar from './DocumentLeftbar.js';
import DocumentDetail from './DocumentDetail.js';
import { useLocation } from "react-router-dom";


function DocumentContent(props) {
    // /** Get Query */
    const getQuery = new URLSearchParams(useLocation().search);
    const [type, id, update] = [getQuery.get("type"), getQuery.get("id"), getQuery.get("update")];


    /** Render */
    return (
        <div className="doc__content">
            {type ?
                <>
                    <div className="doc__content__leftbar">
                        <DocumentLeftbar type={type} />
                    </div>
                    <div className="doc__content__detail">
                        <DocumentDetail id={id} update={update} />
                    </div>
                </>
                : "Nothing"
            }
        </div>
    )
}

export default DocumentContent;