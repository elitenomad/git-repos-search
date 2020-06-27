import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import SimplePagination from './Pagination/SimplePagination'

const RepositoriesHeader = (props) => {
  const {repoCount, handleSubmit} = props
  const pages = Math.ceil(repoCount / 30) // 30 is the default results returns by Github API.
  
  return (
    <Container fluid>
      <Row>
        <Col xs={6} className="text-left">
          <p>Found {repoCount} repositories.</p>
        </Col>
        <Col xs={6} className="text-right">
            <SimplePagination
              pages={pages}
              onClick={handleSubmit}
            />
        </Col>
      </Row>
    </Container>
  )
}

export default RepositoriesHeader
