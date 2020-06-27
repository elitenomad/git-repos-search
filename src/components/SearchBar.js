import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {buttonText} from "../helpers/btnHelper"
import PropTypes from 'prop-types'

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
    <Form onSubmit={handleSubmit} className="container-fluid">
      <Form.Group controlId="formGroupEmail">
        <Form.Label srOnly>Repository Name</Form.Label>
        <Form.Control
          required
          size="lg"
          type="text"
          placeholder="Enter Repository name here"
          value={searchText}
          onChange={handleChange}
          autoFocus
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
  )
}

SearchBar.propTypes = {
  busy: PropTypes.bool,
  searchText: PropTypes.string,
  onSearchTextInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar
