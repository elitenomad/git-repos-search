import React from "react"
import {Container, Row, Col} from "react-bootstrap"

const RepositoriesHeader = (props) => {
  const {repoCount} = props

  return (
    <Container fluid>
      <Row className="text-left">
        <Col md={12}>
          <p>Found {repoCount} repositories.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default RepositoriesHeader
