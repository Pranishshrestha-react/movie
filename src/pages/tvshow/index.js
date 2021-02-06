import React from 'react';
import {BASE_URL, API_KEY} from '../../config.js';
import TvCard from '../../components/tvcard';
import axios from 'axios';

const P_TvShow = () => {
    const [tvShow, setTvShow]=React.useState([]);

    React.useEffect(() => {
        getTvShow();
    }, []);

    const getTvShow = async() => {
        const res = await axios.get(`${BASE_URL}/tv/latest`, {params:{api_key : API_KEY}});
        setTvShow(res.data.results);
    }

    return(
        <div>
            <div className="mt-2 text-light card bg-info p-2">
                <h3>Trending Now</h3>
            </div>

            <div className="row">
                {
                     tvShow.map(serie => {
                        return <div className="col-md-2"><TvCard serie={serie}/></div>
                    })
                }
            </div>

        </div>
    )




}
export default P_TvShow;