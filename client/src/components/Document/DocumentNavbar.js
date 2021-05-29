import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/** Desc
 * - Fetch dữ liệu từ /api/document lưu vào state data
 * - Dạng dữ liệu { success, types}
 * - render ra Navbar
 * - item trong navbar trả về query ?type=[tên tài liệu]
 */

function DocumentNavbar(props) {
    /** State */
    const [isLoad, setLoad] = useState(false);
    const [data, setData] = useState({});
    /** Effect */
    useEffect(() => {
        fetch('/api/document')
            .then(response => response.json())
            .then(response => {
                setLoad(true);
                setData({ ...response })
            })
            .catch(error => {
                console.log(error);
            });
    }, [])


    /** Render */
    var content = "";
    if (data.types) {
        content = data.types.map(type => {
            return (
                <div key={type} className="doc__navbar__item">
                    <Link to={`/document?type=${type}`} style={{ textDecoration: "none", color: "white" }}>
                        {type}
                    </Link>
                </div>
            )
        })
    }
    if (!isLoad) {
        return (
            <div className="doc__navbar">
                Loading...
            </div>
        )
    }

    return (
        <div className="doc__navbar">
            {content}
        </div>
    );
}

export default DocumentNavbar;