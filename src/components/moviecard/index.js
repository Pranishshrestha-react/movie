import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Badge 
  } from 'reactstrap';
import {IMAGE_BASE_URL} from '../../config.js';
const MovieCard =({movie}) => {
    return(
        <Card className="mt-2">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">{movie.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Popularity: {movie.popularity}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Vote Count: {movie.vote_count}</CardSubtitle>
          <div>
              {movie.adult && <Badge color="info">Adult</Badge>}
          </div>
        </CardBody>
      </Card>

    )
}
export default MovieCard;