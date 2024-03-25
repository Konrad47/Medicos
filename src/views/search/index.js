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
      const mappedArticles = getArticles
        .filter(article => {
          const descriptionContent = JSON.parse(
            article.node.description.raw
          ).content
          const descriptionText = descriptionContent
            .filter(node => node?.content[0]?.nodeType === "text")
            .map(paragraph =>
              paragraph.content.map(({ value }) => value).join("")
            )
            .join(" ")
          return (
            (searchQuery !== "" &&
              article.node.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase())) ||
            descriptionText.toLowerCase().includes(searchQuery.toLowerCase())
          )
        })
        .map(article => {
          const descriptionContent = JSON.parse(
            article.node.description.raw
          ).content
          const descriptionText = descriptionContent
            .filter(node => node?.content[0]?.nodeType === "text")
            .map(paragraph =>
              paragraph.content.map(({ value }) => value).join("")
            )
            .join(" ")

          const sentences = descriptionText.split(".")
          let firstSentenceContainingQuery = sentences.find(sentence =>
            sentence.toLowerCase().includes(searchQuery.toLowerCase())
          )

          if (
            firstSentenceContainingQuery &&
            firstSentenceContainingQuery.length > 100
          ) {
            firstSentenceContainingQuery = firstSentenceContainingQuery.slice(
              0,
              100
            )
          }

          const description =
            firstSentenceContainingQuery ||
            (sentences[0] ? sentences[0].slice(0, 100) : "")

          return {
            title: article.node.title,
            description,
            category: `${t`search.article`}`,
            slug: article.node.slug,
          }
        })

      setSearchedData(mappedArticles)
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
