import React from 'react';
import {BASE_URL, API_KEY} from '../../config.js';
import TvCard from '../../components/tvcard';
import axios from 'axios';

const All_series =() => {
    const[tvSeries, setTvSeries] = React.useState([]);

    React.useEffect(() => {
        getTvSeries();
    }, []);

    const getTvSeries = async() => {
        const res = await axios.get(`${BASE_URL}/trending/tv/week` , {params:{ api_key: API_KEY}});
        setTvSeries(res.data.results);
    }

    return(
        <div style={{marginTop:'4.5%'}}>
            <div className="mt-2 text-light card bg-info p-2">
                <h3>Latest Tv Shows</h3>
            </div>

            <div className="row">
                {
                    tvSeries.map(show =>{
                        return <div className="col-md-2"><TvCard show={show}/></div>
                    })
                }
            </div>

        </div>
        )

}

export default All_series;