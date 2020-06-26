import React from "react"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"

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

export default Repository
