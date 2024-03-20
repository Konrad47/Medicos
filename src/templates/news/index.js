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
        data.allContentfulExampleArticle.edges,
        language
      )
      console.log(data.allContentfulExampleArticle.edges)
      console.log(getArticle)

      setArticle(getArticle)
    }
    getData()
  }, [data.allContentfulExampleArticle, pageContext, language])

  const renderArticle = data => {
    return <h1 className="h1-style">{data.node.title}</h1>
  }

  return (
    <>
      <Seo
        title={t`seo.news-page.title`}
        description={t`seo.news-page.description`}
      />
      <div className="single-article-container">
        <div className="container">{article && renderArticle(article[0])}</div>
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
    allContentfulExampleArticle {
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
