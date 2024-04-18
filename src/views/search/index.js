import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import SearchHeader from "./components/searchHeader"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import SearchContent from "./components/searchContent"
import moment from "moment"

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
      allContentfulArticle {
        edges {
          node {
            title
            slug
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
        data.allContentfulArticle.edges,
        language
      )
      if (searchQuery && searchQuery !== "" && searchQuery.trim() !== "") {
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
              (searchQuery &&
                searchQuery.trim() !== "" &&
                article.node.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())) ||
              article.node.author
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              moment(article.node.createdAt)
                .format("DD/MM/YYYY HH:MM")
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
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

            let firstSentenceContainingQuery = descriptionText.slice(0, 100)

            let startIndex = 0
            let endIndex = descriptionText.length - 1

            const queryIndex = descriptionText
              .toLowerCase()
              .indexOf(searchQuery.toLowerCase())
            if (queryIndex !== -1) {
              const queryLength = searchQuery.length
              startIndex = Math.max(0, queryIndex - 50)
              endIndex = Math.min(
                descriptionText.length - 1,
                queryIndex + queryLength + 50
              )
              firstSentenceContainingQuery =
                "..." + descriptionText.slice(startIndex, endIndex)
            }

            if (
              moment(article.node.createdAt)
                .format("DD/MM/YYYY HH:MM")
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              firstSentenceContainingQuery += `...${moment(
                article.node.createdAt
              ).format("DD/MM/YYYY HH:MM")}`
            }

            if (
              article.node.author
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              firstSentenceContainingQuery += `...${article.node.author}`
            }

            console.log(firstSentenceContainingQuery)
            return {
              title: article.node.title,
              description: firstSentenceContainingQuery + "...",
              category: `${t`search.article`}`,
              slug: article.node.slug,
            }
          })

        setSearchedData(mappedArticles)
      }
    }
    getData()
  }, [data.allContentfulArticle, language, searchQuery])

  return (
    <Layout>
      <Seo
        title={t`seo.search.title`}
        description={t`seo.search.description`}
      />
      <SearchHeader searchData={searchQuery} />
      {searchedData && (
        <SearchContent searchContent={searchedData} searchData={searchQuery} />
      )}
    </Layout>
  )
}
export default Search
