import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import Layout from "../../components/layout"
import NewsContent from "./components/newsContent"

const NewsPage = ({ data, pageContext }) => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const [article, setArticle] = useState()

  useEffect(() => {
    const getData = () => {
      const getArticles = getCurrentTranslations(
        data.allContentfulArticle.edges,
        language
      )

      const singleArticle = getArticles.find(article => {
        return article.node.title === pageContext.article.title
      })
      setArticle(singleArticle)
    }
    getData()
  }, [data.allContentfulArticle, pageContext, language])

  return (
    <Layout>
      <Seo
        title={t`seo.news-page.title`}
        description={t`seo.news-page.description`}
      />
      {article && <NewsContent article={article} />}
    </Layout>
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
          node_locale
          author
          createdAt
          description {
            raw
            references {
              ... on ContentfulAsset {
                __typename
                contentful_id
                file {
                  url
                }
              }
              title
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
`
