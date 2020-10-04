import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
const DishDetail = (props) => {
  let { dish } = props;
  if (dish !== null) {
    let comments = dish.comments.map((comment) => {
      return (
        <li key={dish.id}>
          <p>{comment.comment}</p>
          <p>{comment.author} <span>---{comment.date}</span></p>
         
        </li>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Card className="col-12 col-md-5">
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          <div className="col-12 col-md-5">
            <h4>Comments</h4>
            <ul>{comments}</ul>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default DishDetail;
