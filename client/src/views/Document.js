import React from 'react';
import DocumentNavbar from '../components/DocumentNavbar.js';
import DocumentLeftbar from '../components/DocumentLeftbar.js';
import DocumentContent from '../components/DocumentContent.js';

class Document extends React.Component {
    render() {
        return (
            <div id="Document" className="mr-t-10">
                <DocumentNavbar></DocumentNavbar>
                <div className="Doc-Container">
                    <DocumentLeftbar></DocumentLeftbar>
                    <DocumentContent></DocumentContent>
                </div>
            </div>
        )
    }
}
export default Document;