import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetailComponent extends Component {
  
  render() {
    const { dish } = this.props;

    return (
      <div className="row  m-1">
        <div className="col-12 col-md-5">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5">
          <h4>Comments</h4>
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      let options = { year: "numeric", month: "short", day: "numeric" };
      return comments.map(comment => (
        <ul key={comment.id} className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author}{" "}
            {new Date(comment.date).toLocaleDateString("en-US", options)}
          </li>
        </ul>
      ));
    } else return <div />;
  }

}

export default DishDetailComponent;