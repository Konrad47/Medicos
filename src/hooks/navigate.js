import { navigate } from "gatsby"

const Navigate = (path, language) => {
  if (language === "pl") {
    navigate(`/${path}`)
  } else {
    navigate(`/${language}/${path}`)
  }
}

export default Navigate
