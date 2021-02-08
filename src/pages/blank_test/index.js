import React from 'react';
import {BASE_URL , API_KEY} from '../../config.js';
import axios from 'axios';
import Genre from '../../components/dropdown';

const ArrayGen= () => {
    const [arrayGen, setArrayGen] = React.useState([]);

    React.useEffect(() =>{
        getArrayGen();
    }, []);
    
    const getArrayGen = async() => {
        const res = await axios.get(`${BASE_URL}/genre/movie/list` , {params:{ api_key: API_KEY}});
        setArrayGen(res.data.genres);
        console.log(res);
        

    }
    
    return(
    <div style={{marginTop:'4.5%'}}>
        <div>
            {
                arrayGen.map(listG => {
                    return <Genre listG={listG}/>;
                })
            }
        </div> 
    </div>
    )
}
export default ArrayGen;