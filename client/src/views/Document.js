import '../components/Doc/doc.scss';
import DocNavbar from '../components/Doc/DocNavbar';
import Leftbar from '../components/Doc/Leftbar';
import DocRightContent from '../components/Doc/DocRightContent';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

export const docContext = createContext();

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

    const [refesh, setRefesh] = useState(true);         // refesh signal, get data form server again

    /** Effect Fetch */
    useEffect(() => {
        async function fetchDocument() {
            try {
                const queryStringified = queryString.stringify(query);
                const response = await fetch(`/api/document?${queryStringified}`);
                const responseJSON = await response.json();

                // Write to states
                setSuccess(responseJSON.success);
                setTypes(responseJSON.types);
                setDoc(responseJSON.doc);
                setTitles(responseJSON.titles);
                setMessage(responseJSON.message)

            } catch (error) {
                console.log(error);
            }
        }
        fetchDocument();
    }, [query.id, query.type, query.update]);

    const docRefeshHandler = () => {
        setRefesh(!refesh);
    }

    function createRightContentFlag(id, type, update) {     //0: create, 1: update, 2: show, 3: null
        if (type && update) return 1;
        if (type && id) return 2
        if (type) return 0;
        return 3;
    }
    /** Render */
    if (!success) return (<div>{message}</div>);
    const flagRightContent = createRightContentFlag(query.id, query.type, query.update);


    return (
        <div>
            <docContext.Provider value={doc, docRefeshHandler}>
                <DocNavbar baseLink="/document"
                    data={types} />
                <div className="doc__body">
                    <Leftbar data={titles}
                        type={query.type}
                        baseLink={"/document"} />
                    <DocRightContent doc={doc} type={query.type} flagRightContent={flagRightContent} />
                </div>
            </docContext.Provider>
        </div>
    );
}
export default Document;

