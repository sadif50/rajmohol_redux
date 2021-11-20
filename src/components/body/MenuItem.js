import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg style={{opacity: "0.5"}} width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle onClick={props.DishSelect} style={{cursor: "pointer"}}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;
