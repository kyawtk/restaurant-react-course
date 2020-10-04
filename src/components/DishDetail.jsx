import React, { Component } from 'react';
import {Media, Card,CardBody,CardImg,CardTitle,CardText,CardImgOverlay} from "reactstrap"

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {dish} = this.props;
        if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
    }
}
 
export default DishDetail;