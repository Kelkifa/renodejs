import React from 'react';
import '../components/Documents/Document.scss';
import DocumentNavbar from '../components/Documents/DocumentNavbar.js';
import DocumentContent from '../components/Documents/DocumentContent.js';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { useLocation } from "react-router-dom";

function Document(props) {
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id"), update: getQuery.get("update") };

    return (
        <Router>
            <div className="doc mr-t-10">
                <DocumentNavbar query={query}></DocumentNavbar>
                <Switch>
                    <Route path="/document">
                        <DocumentContent query={query}></DocumentContent>
                    </Route>
                </Switch>
            </div>

        </Router>
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