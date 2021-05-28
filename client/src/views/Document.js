import '../components/Documents/Document.scss';
import DocumentNavbar from '../components/Documents/DocumentNavbar.js';
import DocumentContent from '../components/Documents/DocumentContent.js';
import { useLocation } from "react-router-dom";

function Document(props) {
    /** Get Query */
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id"), update: getQuery.get("update") };
    console.log(query);
    /** Render */
    return (
        <div>
            <DocumentNavbar query={query}></DocumentNavbar>
            <DocumentContent query={query}></DocumentContent>
        </div>
    )
}

export default Document;