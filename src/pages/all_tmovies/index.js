import React from 'react';
import {BASE_URL , API_KEY} from '../../config.js';
import MovieCard from '../../components/moviecard';
import axios from 'axios';

const All_tmovies = () => {
    const [tMovies, setTMovies] = React.useState([]);

    React.useEffect(() => {
        getTMovies();
    }, []);

    const getTMovies = async() => {
        const res = await axios.get(`${BASE_URL}/trending/movie/week` , {params: {api_key: API_KEY}});
        setTMovies(res.data.results);
    }

    return(
        <div style={{marginTop:'4.5%'}}>
            <div className="mt-2 text-light card bg-info p-2">
                <h3>Trending Now</h3>
            </div>

            <div className="row">
                {
                    tMovies.map(movie =>{
                        return <div className="col-md-2"><MovieCard movie={movie}/></div>
                    })
                }
            </div>

        </div>
    )



}
export default All_tmovies;