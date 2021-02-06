import React from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY} from '../../config.js';
import MovieCard from '../../components/moviecard';
import { BrowserRouter, Link  } from 'react-router-dom';
import CarouselPage from '../../components/carousel'; 



const Home = () => {
    const [trendings, setTrendings] = React.useState([]);
    const [playingNow, setPlayingNow] = React.useState([]);
    const[upComing, setUpComing] = React.useState([]);
    // const [tvSeries, setTvSeries] = React.useState([]);

    React.useEffect(() => {
        getTrendingMovies();
        getPlayingNow();
        getUpComing();
        //getTvSeries();
    }, []);

    const getTrendingMovies = async() => {
        const res = await axios.get(`${BASE_URL}/trending/movie/week`, {params:{ api_key: API_KEY}});
        setTrendings(res.data.results.splice(0,6));

    }

    const getPlayingNow = async() => {
        const res = await axios.get(`${BASE_URL}/movie/now_playing` , {params:{ api_key: API_KEY}});
        setPlayingNow(res.data.results.splice(0,6));
    }

    const getUpComing = async() => {
        const res = await axios.get(`${BASE_URL}/movie/upcoming`, {params :{api_key: API_KEY}});
        setUpComing(res.data.results.splice(0,6));
    }

   // const getTvSeries = async() => {
     //   const res = await axios.get(`${BASE_URL}/tv/latest` , {params:{ api_key: API_KEY}});
      //  setTvSeries(res.data.results);
    //}

    return(
        <div>
            <div>
                <BrowserRouter>
                <CarouselPage images={trendings}/>
                </BrowserRouter>
            </div>
            <div className="container-fluid">
                <div className ="mt-2 text-light card bg-info p-2" >
                    <h3>Upcoming Movies</h3>
                    <h4 style={{margin:'0.4% 0 0 90%', position:'absolute'}}><Link to="/all_umovies" style={{color:'#fff'}}>->></Link></h4>
                </div>

                <div className="row">
                {
                    upComing.map(movie => {
                        return <div className="col-md-2"><MovieCard movie={movie}/></div>
                    })
                }
                </div>
                
                <div className ="mt-2 text-light card bg-info p-2" >
                    <h3>Playing Now</h3>
                    <h4 style={{margin:'0.4% 0 0 90%', position:'absolute'}}><Link to="/all_pmovies" style={{color:'#fff'}}>->></Link></h4>
                </div>

                <div className="row">
                {
                    playingNow.map(movie => {
                        return <div className="col-md-2"><MovieCard movie={movie}/></div>
                    })
                }
                </div>

                <div className ="mt-2 text-light card bg-info p-2">
                    <h3>Trending Now</h3>
                    <h4 style={{margin:'0.4% 0 0 90%', position:'absolute'}}><Link to="/all_tmovies" style={{color:'#fff'}}>->></Link></h4>
                </div>

                <div className="row">
                {
                    trendings.map(movie => {
                        return <div className="col-md-2"><MovieCard movie={movie}/></div>
                    })
                }
                </div>
            </div>

           
        </div>
    )

}

export default Home;