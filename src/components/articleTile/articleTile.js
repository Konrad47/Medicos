import React, { useEffect } from "react"
import "./styles/articleTile.css"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleTile = ({ article }) => {
  const { t } = useTranslation()

  return (
    <div
      onClick={() => navigate(`/news/${article.node.slug}`)}
      className="tile"
    >
      <GatsbyImage
        alt={article.node.title}
        placeholder={article.node.title}
        className="tile-image"
        image={getImage(article.node.image.gatsbyImageData)}
      />
      <div className="tile-text">
        <p className="p-style tile-title">{article.node.title}</p>
        <p className="p-style tile-description">{article.node.description}</p>
        <div className="tile-text-down">
          <p className="p-style date">{article.node.createdAt}</p>
          <p className="p-style ">{t`home.read-more`}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleTile
