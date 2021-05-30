import '../components/Doc/doc.scss';
import DocNavbar from '../components/Doc/DocNavbar';
import Leftbar from '../components/Doc/Leftbar';
import DocRightContent from '../components/Doc/DocRightContent';
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
    if (!success) return (<div>{message}</div>);
    var flagRightContent = 0;   //0: null, 1: update, 2: show, 3: create
    if (query.update) flagRightContent = 1;
    if (query.type && !query.id && !query.update) flagRightContent = 2;
    if (!query.type) flagRightContent = 3;

    return (
        <div>
            <DocNavbar baseLink="/document"
                data={types} />
            <div className="doc__body">
                <Leftbar data={titles}
                    type={query.type}
                    baseLink={"/document"} />
                <DocRightContent doc={doc} type={query.type} flagRightContent={flagRightContent} />
            </div>
        </div>
    );
}
export default Document;

