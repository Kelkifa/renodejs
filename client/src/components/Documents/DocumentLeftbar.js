import { useState, useEffect } from 'react';
import DocumentLeftbarTitle from './DocumentLeftbarTitle.js';
import { Link } from 'react-router-dom';

function DocumentLeftbar(props) {
    /** State */
    const [isloaded, setIsloaded] = useState(false);
    const [data, setData] = useState({});
    /** Props */
    const { type } = props;
    /** Effect */
    useEffect(() => {
        if (type) {
            fetch(`/api/document?type=${type}`)
                .then(response => response.json())
                .then(response => {
                    setIsloaded(true);
                    setData({ ...response });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [type])
    /** Render */
    if (!isloaded) {
        return (
            <>
                Loading...
            </>
        )
    }
    if (!data.success)
        return (
            <>
                {data.message}
            </>
        )
    return (
        <>
            <Link to={`/document?type=${type}`} style={{ textDecoration: "none", color: "black" }}>
                <h2 className="doc__content__leftbar__item doc__content__leftbar__item--title">{type}</h2>
            </Link>
            {data.titles ? data.titles.map(title => {
                return (
                    <DocumentLeftbarTitle key={title._id} title={title.parent_part.title} id={title._id} type={type} />
                )
            }) : ""}
        </>
    )
}

export default DocumentLeftbar;