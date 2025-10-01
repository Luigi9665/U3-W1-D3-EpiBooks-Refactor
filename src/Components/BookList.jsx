import { Component } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <Container fluid className="my-5">
        <Container className="d-flex justify-content-center mb-4">
          <Form className="d-flex w-25">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button className="text-white bg-gradient border-3 fs-4">Search</Button>
          </Form>
        </Container>
        <Row className="g-4">
          {books.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
