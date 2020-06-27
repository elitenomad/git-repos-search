import React, {useState} from "react"
import SearchBar from "./SearchBar"
import Repositories from "./Repositories"
import {getRepos} from "../services/repositories"
import {transformErrors} from "../helpers/errorsHelper"
import Errors from "./Error"

const Home = () => {
  const [text, setText] = useState('')
  const [repos, setRepos] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const handleResponse = (response) => {
    setTotalCount(response.data.total_count)
    setRepos(response.data.items)
    setBusy(false)
    setError(null)
  }

  const handleError = (error) => {
    setError(transformErrors(error))
    setBusy(false)
  }

  const handleSubmit = (page) => {
    if(text){
      setBusy(true)
      getRepos(text, page)
      .then(handleResponse)
      .catch(handleError)
    }
  }

  return (
    <>
      {error && <Errors error={error} />}

      <SearchBar
        busy={busy}
        searchText={text}
        onSearchTextInput={setText}
        onSubmit={handleSubmit}
      />

      <hr />

      <Repositories 
        repos={repos} 
        totalCount={totalCount}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Home
