import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/homeBlog.css"

const HomeBlog = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="home-b-container">
        <div className="container">
          <h2 className="h2-style">{t`home-blog.title`}</h2>
          <div className="articles"></div>
        </div>
      </div>
    </>
  )
}

export default HomeBlog
