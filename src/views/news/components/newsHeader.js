import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/newsHeader.css"

const NewsHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="news-h-container">
        <div className="container">
          <h1 className="h1-style">{t`news-header.title`}</h1>
          <p className="p-style">{t`news-header.description`}</p>
        </div>
      </div>
    </>
  )
}

export default NewsHeader
