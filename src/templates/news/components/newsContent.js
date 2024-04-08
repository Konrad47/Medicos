import React, { useState, useEffect } from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/newsContent.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { articleTextRenderOptions } from "../../../utils/articleRenderOption"

const NewsContent = ({ article }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="article">
        <div className="container">
          <div className="article-header">
            <div className="left-text">
              <Link
                to="/news"
                className="bright-button"
              >{t`news.article.return`}</Link>
              <div className="down-left-text">
                <div className="date-and-name">
                  <p className="p-style">{article.node.createdAt}</p>
                  <p className="p-style">{article.node.author}</p>
                </div>
                <h2 className="h2-style">{article.node.title}</h2>
              </div>
            </div>
            <GatsbyImage
              alt={article.title}
              placeholder={article.title}
              className="article-image"
              image={getImage(article.node.image.gatsbyImageData)}
            />
          </div>
          <div className="article-content">
            {renderRichText(article.node.description, articleTextRenderOptions)}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsContent
