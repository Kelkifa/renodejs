import { useState, useEffect, useContext } from 'react';
import Card from '../components/Cards/Card.js';
import animeApi from '../api/animeApi';
// import { AuthContext } from '../contexts/AuthContextProvider';

function Anime(props) {
    /** State */
    const [data, setData] = useState([])

    /** Context */
    // const userContext = useContext(AuthContext);

    /** Effect */
    useEffect(() => {
        async function fetchAnime() {
            try {
                const response = await animeApi.getAll({});
                setData(response);
            } catch (error) {
                if (error.response.data) console.log(error.response.data)
                else console.log(error.message);
            }
        }
        fetchAnime();
    }, [])

    return (
        <div className="cards">
            {data.map(item => (
                <Card key={item._id} imgLink={item.img}
                    addClass="mr-r-20 mr-b-20">
                    {item.description}
                </Card>
            ))}
        </div>
    );
}

export default Anime;