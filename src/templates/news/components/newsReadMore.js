import React, { useEffect, useState, useContext } from "react"
import {
  useTranslation,
  I18nextContext,
  Link,
} from "gatsby-plugin-react-i18next"
import "../styles/newsReadMore.css"
import ArticleTile from "../../../components/articleTile/articleTile"

const NewsReadMore = ({ articles }) => {
  const { t } = useTranslation()

  const renderArticles = value => {
    return value.map((val, index) => (
      <ArticleTile key={index} article={val} t={t} />
    ))
  }

  return (
    <>
      <div className="news-rm-container">
        <div className="container">
          <h2 className="h2-style">{t`news-read-more.title`}</h2>
          <div className="articles">{articles && renderArticles(articles)}</div>
          <Link
            to="/news"
            className="bright-button"
          >{t`news-read-more.news`}</Link>
        </div>
      </div>
    </>
  )
}

export default NewsReadMore
