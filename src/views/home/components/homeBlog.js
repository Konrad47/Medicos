import React, { useEffect, useState, useContext } from "react"
import {
  useTranslation,
  I18nextContext,
  Link,
} from "gatsby-plugin-react-i18next"
import "../styles/homeBlog.css"
import { graphql, useStaticQuery } from "gatsby"

const HomeBlog = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle(sort: { createdAt: ASC }) {
        edges {
          node {
            author
            createdAt(formatString: "DD/MM/YYYY HH:MM")
            description {
              raw
              references {
                id
              }
            }
            image {
              gatsbyImageData(quality: 100)
            }
            slug
            title
          }
        }
      }
    }
  `)
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
