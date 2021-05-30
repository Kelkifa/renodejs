import React, { useState, useEffect } from 'react';

function Document(props) {
    /** State */
    const [data, setData] = useState([]);
    /** Effect */
    useEffect(() => {
        async function fetchGetData() {
            try {
                const response = await fetch('/api/document');
                const responseJSON = await response.json();
                const { doc } = responseJSON;
                setData(doc);
            } catch (error) {
                console.log(`there are some error ${error}`);
            }
        }
        fetchGetData();
    }, [])
    /** Render */
    return (
        <div>
            <ul>
                {data.map(value => (<li key={value._id}>{value.parent_part.title}</li>))}
            </ul>
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