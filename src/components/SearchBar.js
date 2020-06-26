import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {Container, Row, Col} from "react-bootstrap"
import {buttonText} from "../helpers/btnHelper"

const SearchBar = (props) => {
  const {busy, searchText, onSearchTextInput, onSubmit} = props

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(event.target.value)
  }

  const handleChange = (event) => {
    onSearchTextInput(event.target.value)
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Form onSubmit={handleSubmit} className="container-fluid">
            <Form.Group>
              <Form.Control
                required
                size="lg"
                type="text"
                placeholder="Enter Repository name here"
                value={searchText}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              disabled={!searchText}
              variant="outline-primary"
              size="lg"
              type="submit"
            >
              {buttonText(busy)}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
