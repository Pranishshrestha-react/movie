import React from 'react';
import {BASE_URL , API_KEY} from '../../config.js';
import MovieCard from '../../components/moviecard';
import axios from 'axios';

const All_pmovies= () => {
    const [pMovies, setPMovies] = React.useState([]);

    React.useEffect(() => {
        getPMovies();
        
    }, []);

    const getPMovies = async() => {
        const res = await axios.get(`${BASE_URL}/movie/now_playing`, {params:{ api_key: API_KEY}});
        setPMovies(res.data.results);
        
    }


    return(
        <div style={{marginTop:'4.5%'}}>
            <div className ="mt-2 text-light card bg-info p-2" >
                <h3>Playing Now</h3>
                
            </div>

            <div className="row">
            {
                pMovies.map(movie => {
                    return <div className="col-md-2"><MovieCard movie={movie}/></div>
                })
            }
            </div>
        </div>
    )
    


}
export default All_pmovies;