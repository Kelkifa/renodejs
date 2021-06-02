import { useState, useEffect } from 'react';
import Card from '../components/Cards/Card.js';
import animeApi from '../api/animeApi';
import ErrorAlert from '../components/Alerts/ErrorAlert';
import { Link } from 'react-router-dom';

function Anime(props) {
    /** State */
    const [data, setData] = useState([]);
    const [errorResponse, setErrorResponse] = useState({ success: true, message: null });

    /** Effect */
    useEffect(() => {
        async function fetchAnime() {
            try {
                const response = await animeApi.getAll({});
                setData(response);
            } catch (error) {
                if (error.response.data) {
                    console.log(error.response.data);
                    setErrorResponse({ ...error.response.data });
                }
                else console.log(error.message);
            }
        }
        fetchAnime();
    }, []);
    return (
        <div className="cards">
            {
                errorResponse.success === false
                    ? <div style={{ width: "100%" }}>
                        <ErrorAlert errorTitle="Can't Access"
                            content='You have to login first. If you need any help just place the mouse pointer above info icon next to the form field'>
                            <>
                                Go to <Link to='/login'>login</Link>
                            </>
                        </ErrorAlert>
                    </div>
                    : data.map(item => (
                        <Card key={item._id} imgLink={item.img}
                            addClass="mr-r-20 mr-b-20">
                            {item.description}
                        </Card>
                    ))
            }
        </div>
    );
}

export default Anime;