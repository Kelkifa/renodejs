import '../components/Doc/doc.scss';
import DocNavbar from '../components/Doc/DocNavbar';
import Leftbar from '../components/Doc/Leftbar';
// import Leftbar from '../components/Doc/Leftbar';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

function Document(props) {
    /** Query */
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id"), update: getQuery.get("update") };

    /** State */
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [types, setTypes] = useState([]);
    const [doc, setDoc] = useState({});
    const [titles, setTitles] = useState([]);

    /** Effect Fetch */
    useEffect(() => {
        async function fetchDocument() {
            try {
                const queryStringified = queryString.stringify(query);
                const response = await fetch(`/api/document?${queryStringified}`);
                const responseJSON = await response.json();

                // Write to states
                console.log(responseJSON);
                setSuccess(responseJSON.success);
                if (responseJSON.success) {
                    setTypes(responseJSON.types);
                    setDoc(responseJSON.doc);
                    setTitles(responseJSON.titles);
                }
                else {
                    setMessage(responseJSON.message)
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchDocument();
    }, [query.id, query.type, query.update]);
    /** Render */
    // console.log(titles);
    return (
        <div>
            <DocNavbar baseLink="/document"
                data={types} />
            <div className="doc__body">
                <Leftbar data={titles}
                    type={query.type}
                    baseLink={"/document"} />

            </div>
        </div>
    );
}

export default Document;


// import '../components/Documents/Document.scss';
// import DocumentNavbar from '../components/Documents/DocumentNavbar.js';
// import DocumentContent from '../components/Documents/DocumentContent.js';
// import { useLocation } from "react-router-dom";

// const getQuery = new URLSearchParams(useLocation().search);
// const query = { type: getQuery.get("type"), id: getQuery.get("id"), update: getQuery.get("update") };



// function Document(props) {
//     /** State */
//     const [data, setData] = useState([]);
//     /** Effect */
//     useEffect(() => {
//         async function fetchGetData() {
//             try {
//                 const response = await fetch('/api/document');
//                 const responseJSON = await response.json();
//                 const { doc } = responseJSON;
//                 setData(doc);
//             } catch (error) {
//                 console.log(`there are some error ${error}`);
//             }
//         }
//         fetchGetData();
//     }, [])
//     /** Render */
//     return (
//         <div>
//             <ul>
//                 {data.map(value => (<li key={value._id}>{value.parent_part.title}</li>))}
//             </ul>
//         </div>
//     );
// }