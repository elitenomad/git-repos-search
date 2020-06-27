import axios from "axios"

const BASE_URL = 'https://api.github.com'

/*
    When searching for repositories, you can get text match metadata for the name and description 
    fields when you pass the text-match media type.
    Reference: https://developer.github.com/v3/search/#text-match-metadata
  */
 export const getRepos = (nameOrDesc, page = 1) => {
  return axios.get(`${BASE_URL}/search/repositories`, {
    params: {
      q: `${nameOrDesc}`,
      sort: "stars",
      order: "desc",
      page: page
    },
    headers: {
      Accept: "application/vnd.github.v3.text-match+json",
    },
  })
}
