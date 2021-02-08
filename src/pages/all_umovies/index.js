import React from 'react';
import {BASE_URL , API_KEY} from '../../config.js';
import MovieCard from '../../components/moviecard';
import axios from 'axios';

const All_umovies = () => {
    const [uMovies, setUMovies] = React.useState([]);

    React.useEffect(() => {
        getUMovies();
    }, []);

    const getUMovies = async() => {
        const res = await axios.get(`${BASE_URL}/movie/upcoming` , {params: {api_key: API_KEY}});
        setUMovies(res.data.results);
    }

    return(
        <div style={{marginTop:'4.5%'}}>
            <div className="mt-2 text-light card bg-info p-2">
                <h3>Trending Now</h3>
            </div>

            <div className="row">
                {
                    uMovies.map(movie =>{
                        return <div className="col-md-2"><MovieCard movie={movie}/></div>
                    })
                }
            </div>

        </div>
    )



}
export default All_umovies;