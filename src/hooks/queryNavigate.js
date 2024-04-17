import { navigate } from "gatsby"

const QueryNavigate = (query, path, language) => {
  const encodedSearchQuery = encodeURIComponent(query)

  if (language === "pl") {
    navigate(`/${path}?query=${encodedSearchQuery}`)
  } else {
    navigate(`/${language}/${path}?query=${encodedSearchQuery}`)
  }
}

export default QueryNavigate
