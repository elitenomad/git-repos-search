import React, {useState} from "react"
import SearchBar from "./SearchBar"
import Repositories from "./Repositories"
import {getRepos} from "../services/repositories"
import {transformErrors} from "../helpers/errorsHelper"
import Errors from "./Error"

const Home = () => {
  const [text, setText] = useState("")
  const [repos, setRepos] = useState([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const handleResponse = (response) => {
    setRepos(response.data.items)
    setError(null)
    setBusy(false)
  }

  const handleError = (error) => {
    setError(transformErrors(error))
    setBusy(false)
  }

  const handleSubmit = () => {
    setBusy(true)
    getRepos(text)
      .then(handleResponse)
      .catch(handleError)
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

      <Repositories repos={repos} />
    </>
  )
}

export default Home
