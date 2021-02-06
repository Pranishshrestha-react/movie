import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Badge 
  } from 'reactstrap';
import {IMAGE_BASE_URL} from '../../config.js';
const TvCard =({serie}) => {
    return(
        <Card className="mt-2">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${serie.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">{serie.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Popularity: {serie.popularity}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Vote Count: {serie.vote_count}</CardSubtitle>
          
        </CardBody> 
      </Card>

    )
}
export default TvCard;