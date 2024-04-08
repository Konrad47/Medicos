import React, { useEffect, useState, useContext } from "react"
import {
  useTranslation,
  I18nextContext,
  Link,
} from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import NewsHeader from "./components/newsHeader"
import NewsContent from "./components/newsContent"

const News = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle(sort: { createdAt: ASC }) {
        edges {
          node {
            node_locale
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
  console.log(data)

  const [articles, setArticles] = useState()

  useEffect(() => {
    const getData = () => {
      const getArticles = getCurrentTranslations(
        data.allContentfulArticle.edges,
        language
      )

      setArticles(getArticles)
    }
    getData()
    console.log(articles)
  }, [data.allContentfulArticle, language])

  return (
    <Layout>
      <Seo title={t`seo.news.title`} description={t`seo.news.description`} />
      <NewsHeader />
      {articles && <NewsContent newsContent={articles} />}
    </Layout>
  )
}
export default News
