// import { useLocation } from "react-router-dom";

import './DocumentContent.scss';
import DocumentDetail from './DocumentDetail.js';
import React, { useState, useEffect } from 'react';



function DocumentContent(props) {
    /** State */
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        if (props.query.type)
            fetch(`/api/document?type=${props.query.type}&id=${props.query.id}`)
                .then(response => response.json())
                .then(data => {
                    if (data != null) {
                        setLoaded(true);
                        setData(data);
                    }
                });
    }, [props.query.type, props.query.id]);


    if (isLoaded) {
        return <DocumentDetail>{data}</DocumentDetail>

    }
    return (
        <div>Loading ...</div>
    )
}
// class DocumentContent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoaded: false,
//             data: [],
//             query: useQuery()
//         }
//     }
//     componentDidMount() {
//         fetch('/api/document')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     isLoaded: true,
//                     data: data
//                 })
//                 console.log(data)
//             })
//     }

//     render() {
//         return (
//             <div id="DocCnt" className="DocCnt">

//             </div>
//         )
//     }
// }

export default DocumentContent;
