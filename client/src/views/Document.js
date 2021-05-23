import React from 'react';
import DocumentNavbar from '../components/DocumentNavbar.js';
import DocumentLeftbar from '../components/DocumentLeftbar.js';
import DocumentContent from '../components/DocumentContent.js';
import {useLocation} from "react-router-dom";

function Document (props){
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id") };

    return (
        <div id="Document" className="mr-t-10">
            <DocumentNavbar></DocumentNavbar>
            <div className="Doc-Container">
                <DocumentLeftbar query={query}></DocumentLeftbar>
                <DocumentContent query={query}></DocumentContent>
            </div>
        </div>
    )
}


// class Document extends React.Component {
//     render() {
//         return (
            // <div id="Document" className="mr-t-10">
            //     <DocumentNavbar></DocumentNavbar>
            //     <div className="Doc-Container">
            //         <DocumentLeftbar></DocumentLeftbar>
            //         <DocumentContent></DocumentContent>
            //     </div>
            // </div>
//         )
//     }
// }
export default Document;