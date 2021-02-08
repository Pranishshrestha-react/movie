import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Badge 
  } from 'reactstrap';
import {IMAGE_BASE_URL} from '../../config.js';
import '../moviecard/moviecard.css';
const TvCard =({show}) => {
    return(
      <div>
        <Card className="mt-2 image card">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${show.poster_path}`} alt="Card image cap" />
        <CardBody className="card-title mb-0">
          <CardTitle tag="h6">{show.name}</CardTitle>
        </CardBody>  
        </Card>
        <div className="card-tag">
          <Badge color="info">{show.original_language}</Badge>
        </div>
      </div>

    )
}
export default TvCard;