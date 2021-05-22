import { useLocation } from "react-router-dom";

import './DocumentContent.scss';

import React, { useState } from 'react';



function DocumentContent(props) {
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id") }

    /** State */
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);

    if (query.type != null && query.id != null) {
        fetch(`/api/document?type=${query.type}&id=${query.id}`)
            .then(response => response.json())
            .then(data => {
                if (data != null)
                    setLoaded(true);
                setData(data);
            });
    }
    else if (query.type != null) {
        fetch(`/api/document/`)
            .then(response => response.json())
            .then(data => {
                setLoaded(true);
                setData(data);
            });
    }

    if (isLoaded) {
        console.log(data);
        return <div>
            co du lieu

        </div>

    }
    return (
        <div> loading ...</div>
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
