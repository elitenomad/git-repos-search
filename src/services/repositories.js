import api from "../services/api"

/*
    When searching for repositories, you can get text match metadata for the name and description 
    fields when you pass the text-match media type.
    Reference: https://developer.github.com/v3/search/#text-match-metadata
  */
export const getRepos = (nameOrDesc) => {
  return api.get("/search/repositories", {
    params: {
      q: `${nameOrDesc}`,
      sort: "stars",
      order: "desc",
    },
    headers: {
      Accept: "application/vnd.github.v3.text-match+json",
    },
  })
}
