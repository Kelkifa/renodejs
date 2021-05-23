import '../components/DocumentLeftbar.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function DocumentLeftbar(props) {
    //Get query
    const getQuery = new URLSearchParams(useLocation().search);
    const query = { type: getQuery.get("type"), id: getQuery.get("id") }
    //State
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (query.type) {
            fetch(`/api/document?type=${query.type}`)
                .then(response => response.json())
                .then(value => {
                    if (value !== '') {
                        setLoaded(true);
                        setData(value);
                    }
                })
        }
    }, [])

    if(isLoaded && data){
        var content = data.map(value=>{
            return (
                <div key={value._id} className="DocLeftbar__item">
                    {value.parent_part.title}
                </div>
            )
        });
    
        return (
            <div id="DocLeftbar" className="DocLeftbar">
                <div className="DocLeftbar__item">
                        {query.type}
                    </div>
                {content}
            </div>
        )
    }
    return "";
}

// class DocumentLeftbar extends React.Component {
//     render() {
//         return (
//             <div id="DocLeftbar" className="DocLeftbar">
//                 <div className="DocLeftbar__item">
//                     Content 1
//                 </div>
//                 <div className="DocLeftbar__item">
//                     Content 2
//                 </div>
//                 <div className="DocLeftbar__item">
//                     Content 3
//                 </div>
//                 <div className="DocLeftbar__item">
//                     Content 4
//                 </div>
//             </div>
//         )
//     }
// }

export default DocumentLeftbar;