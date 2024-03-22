import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/searchHeader.css"
const SearchHeader = ({ searchData }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="search-h-container">
        <div className="container">
          <h1 className="h1-style">{t`search-header.title`}</h1>
          <h3 className="h3-style">{searchData}</h3>
        </div>
      </div>
    </>
  )
}

export default SearchHeader
