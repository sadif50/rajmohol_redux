import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = props => {
    return (
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <hr/>
                    <LoadComments comment={props.dish.comments}/>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails;
