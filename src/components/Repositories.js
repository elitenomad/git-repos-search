import React from "react"
import Repository from "./Repository"
import RepositoriesHeader from "./RepositoriesHeader"
import {Container, Row, Col} from "react-bootstrap"

const Repositories = (props) => {
  if (!props.repos) return null

  const {repos, totalCount, handleSubmit} = props

  return (
    <>
      <RepositoriesHeader
        repoCount={totalCount}
        handleSubmit={handleSubmit}
      />

      {repos.length > 0 ? (
        <Container>
          <Row>
            <Col xs={12}>
              {repos.map((repo) => {
                return <Repository repo={repo} key={repo.id} />
              })}
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  )
}

export default Repositories
