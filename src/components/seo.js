import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import defaultOgImage from "../images/medicos-icon.png"

function Seo({ description, meta = [], title, ogImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const { language } = useI18next()
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const metaOgImage = ogImage === undefined ? defaultOgImage : ogImage

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

export default Seo
