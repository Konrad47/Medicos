import React, { useEffect } from "react"
import "./styles/articleTile.css"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import moment from "moment"

const ArticleTile = ({ article, t }) => {
  const description = JSON.parse(article.node.description.raw).content.filter(
    node => node?.content[0]?.nodeType === "text"
  )[0].content[0].value

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description

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
        <p className="p-style tile-description">{truncatedDescription}</p>
        <div className="tile-text-down">
          <p className="p-style date">
            {moment(article.node.createdAt).format("DD/MM/YYYY HH:MM")}
          </p>
          <p className="p-style read-more">{t`article-tile.read-more`}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleTile
