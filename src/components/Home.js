import React, {useState} from "react"
import SearchBar from "./SearchBar"
import Repositories from "./Repositories"
import {getRepos} from "../services/repositories"

const Home = () => {
  const [text, setText] = useState("")
  const [repos, setRepos] = useState([])
  const [busy, setBusy] = useState(false)

  const updateRepos = (response) => {
    setRepos(response.data.items)
    setBusy(false)
  }

  const handleSubmit = () => {
    setBusy(true)
    getRepos(text).then(updateRepos)
  }

  return (
    <>
      <SearchBar
        busy={busy}
        searchText={text}
        onSearchTextInput={setText}
        onSubmit={handleSubmit}
      />

      <hr />

      <Repositories repos={repos} onSortChange={() => {}} />
    </>
  )
}

export default Home
