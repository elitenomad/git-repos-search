import React from "react"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import PropTypes from 'prop-types'

const Repository = (props) => {
  const {
    repo: {id, name, description, watchers_count},
  } = props

  return (
    <Card>
      <Card.Header as="h2">{name}</Card.Header>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="text-right">
          <Badge variant="info">Watchers count: {watchers_count}</Badge>{" "}
        </div>
      </Card.Body>
    </Card>
  )
}

Repository.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  watchers_count: PropTypes.number
}

export default Repository
