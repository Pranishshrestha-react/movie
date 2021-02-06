import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Badge 
  } from 'reactstrap';
import {IMAGE_BASE_URL} from '../../config.js';
const MovieCard =({movie}) => {
    return(
        <Card className="mt-2">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">{movie.title}</CardTitle>
          <div style={{fontSize:'12px'}}>
              Popularity: {movie.popularity}<br/>
              Vote Count: {movie.vote_count}
          </div>
          <div>
              {movie.adult?<Badge color="info">Adult</Badge> : <Badge color="info">Safe</Badge>}
          </div>
        </CardBody>
      </Card>

    )
}
export default MovieCard;