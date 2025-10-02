import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// destrutturazione della props con book con la function
class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    // rimuovo la destrutturazione con la classe
    const { book } = this.props;

    return (
      <Col sm={6} md={4} lg={3} xl={2}>
        <Card
          className={`h-100 bg-opacity-50 toPointer ${this.state.selected ? "selected" : ""} `}
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={book.img} />
          <Card.Body>
            <Card.Text className="book-title">{book.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
