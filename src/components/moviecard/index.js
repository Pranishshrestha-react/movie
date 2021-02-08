import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Badge 
  } from 'reactstrap';
import {IMAGE_BASE_URL} from '../../config.js';
import './moviecard.css';
const MovieCard =({movie}) => {
    return(
      <div>
        <Card className="mt-2 image-card">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="Card image cap" />
        <CardBody className="card-title mb-0">
          <CardTitle tag="h6" >{movie.title}</CardTitle>
          
        </CardBody>
      </Card>
      <div className="card-tag">
          {movie.adult?<Badge color="info">Adult</Badge> : <Badge color="info">Safe</Badge>}
      </div> 
      </div>
    )
}
export default MovieCard;