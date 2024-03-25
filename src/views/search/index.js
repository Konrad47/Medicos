import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SearchHeader from "./components/searchHeader"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import SearchContent from "./components/searchContent"

const Search = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get("query")
    ? decodeURIComponent(searchParams.get("query"))
    : ""

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulExampleArticle {
        edges {
          node {
            title
            slug
            description {
              raw
            }
            node_locale
          }
        }
      }
    }
  `)

  const [searchedData, setSearchedData] = useState([])

  useEffect(() => {
    const getData = () => {
      const getArticles = getCurrentTranslations(
        data.allContentfulExampleArticle.edges,
        language
      )
      const filteredArticles = getArticles.filter(
        article =>
          searchQuery !== "" &&
          article.node.title.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const mappedArticles = filteredArticles.map(article => ({
        title: article.node.title,
        description: article.node.description.raw,
        category: `${t`search.article`}`,
        slug: article.node.slug,
      }))

      setSearchedData(mappedArticles)
      console.log(mappedArticles)
      console.log(filteredArticles)
    }
    getData()
  }, [data.allContentfulExampleArticle, language, searchQuery])

  return (
    <Layout>
      <Seo
        title={t`seo.search.title`}
        description={t`seo.search.description`}
      />
      <SearchHeader searchData={searchQuery} />
      {searchedData && <SearchContent searchContent={searchedData} />}
    </Layout>
  )
}
export default Search
