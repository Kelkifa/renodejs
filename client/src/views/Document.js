import '../components/Document/Document.scss';
import React from 'react';
import DocumentNavbar from '../components/Document/DocumentNavbar.js';
import DocumentContent from '../components/Document/DocumentContent.js';

function Document(props) {
    return (
        <div>
            <DocumentNavbar />
            <DocumentContent />
        </div>
    )
}

export default Document;


/** document 1 */

// import '../components/Documents/Document.scss';
// import DocumentNavbar from '../components/Documents/DocumentNavbar.js';
// import DocumentContent from '../components/Documents/DocumentContent.js';
// // import { useLocation } from "react-router-dom";
// import { useEffect, useState } from 'react';
// // import { MdSystemUpdate } from 'react-icons/md';
// // import { useLocation } from "react-router-dom";

// function Document(props) {
//     // /** Get Query */
//     // const getQuery = new URLSearchParams(useLocation().search);
//     // const { type } = { type: getQuery.get("type") };
//     /** State */
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [data, setData] = useState([]);   //{success, types}

//     /**  Effect */
//     useEffect(() => {
//         fetch("/api/document")
//             .then(response => response.json())
//             .then(response => {
//                 setIsLoaded(true);
//                 setData({ ...response });
//             })
//     }, [])
//     /** Render */
//     if (!data || !data.success) {
//         return (
//             <div>Nothing</div>
//         )
//     }
//     if (!isLoaded) {
//         return (
//             <div>
//                 Loading...
//             </div>
//         )
//     }
//     return (
//         <div>
//             <DocumentNavbar types={data.types} />
//             <DocumentContent />
//         </div>
//     )
// }

// export default Document;
/** Get Query */
// const getQuery = new URLSearchParams(useLocation().search);
// const {} = { type: getQuery.get("type"), id: getQuery.get("id"), update: getQuery.get("update") };