import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"

const NewsPage = ({ data, pageContext }) => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const [article, setArticle] = useState()

  useEffect(() => {
    const getData = () => {
      const getArticle = getCurrentTranslations(
        data.allContentfulArticle.edges,
        language
      )
      console.log(data.allContentfulArticle.edges)
      console.log(getArticle)

      setArticle(getArticle)
    }
    getData()
  }, [data.allContentfulArticle, pageContext, language])

  const renderArticle = data => {
    return <h1 className="h1-style">{data.title}</h1>
  }

  return (
    <>
      <Seo
        title={t`seo.news-page.title`}
        description={t`seo.news-page.description`}
      />
      <div className="single-article-container">
        <div className="container">
          {pageContext && renderArticle(pageContext.article)}
        </div>
      </div>
    </>
  )
}
export default NewsPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulArticle {
      edges {
        node {
          title
          slug
          node_locale
        }
      }
    }
  }
`
