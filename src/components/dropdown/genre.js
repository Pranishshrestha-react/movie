import React, { useState} from 'react';
import axios from 'axios';

  import { BASE_URL, API_KEY} from '../../config.js';
  import DropDown from './index.js';

const Genre = () => {
    const [genreSelect, setGenreSelect] = React.useState([]);

    React.useEffect(() => {
        getGenreSelect();
    }, []);

    const getGenreSelect = async() => {
        const res = await axios.get(`${BASE_URL}/genre/movie/list`, {params: { api_key: API_KEY}});
        setGenreSelect(res.data.result);
    }
    return(
        <div>
            <DropDown />
        </div>
    )

}

export default Genre;