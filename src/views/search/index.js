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
            node_locale
            slug
            author
            createdAt
            description {
              raw
            }
          }
        }
      }
      allContentfulMaterials {
        edges {
          node {
            title
            node_locale
            slug
            category
            color
            pH
            inci
            cas
            form
            generalInformation {
              raw
            }
            application {
              raw
            }
          }
        }
      }
    }
  `)

  const [searchedData, setSearchedData] = useState([])

  useEffect(() => {
    setSearchedData([])

    const processArticles = () => {
      const articles = getCurrentTranslations(
        data.allContentfulArticle.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredArticles = articles
          .filter(article => {
            const descriptionContent = JSON.parse(
              article.node.description.raw
            ).content
            const descriptionText = getDescriptionText(descriptionContent)
            return articleMatchesQuery(article, descriptionText)
          })
          .map(article => mapArticleData(article))

        setSearchedData(prevData => [...prevData, ...filteredArticles])
      }
    }

    const processMaterials = () => {
      const materials = getCurrentTranslations(
        data.allContentfulMaterials.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredMaterials = materials
          .filter(material => {
            const generalInformationContent = JSON.parse(
              material.node.generalInformation.raw
            ).content
            const generalInformationText = getDescriptionText(
              generalInformationContent
            )
            const applicationContent = JSON.parse(
              material.node.application.raw
            ).content
            const applicationText = getDescriptionText(applicationContent)
            return materialMatchesQuery(
              material,
              generalInformationText,
              applicationText
            )
          })
          .map(material => mapMaterialData(material))

        setSearchedData(prevData => [...prevData, ...filteredMaterials])
      }
    }

    processArticles()
    processMaterials()
  }, [data, language, searchQuery])

  const getDescriptionText = content => {
    return content
      .filter(node => node?.content[0]?.nodeType === "text")
      .map(paragraph => paragraph.content.map(({ value }) => value).join(""))
      .join(" ")
  }

  const articleMatchesQuery = (article, descriptionText) => {
    return (
      article.node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.node.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment(article.node.createdAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      descriptionText.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const mapArticleData = article => {
    const descriptionContent = JSON.parse(article.node.description.raw).content
    const descriptionText = getDescriptionText(descriptionContent)
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

    if (article.node.author.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${article.node.author}`
    }

    return {
      title: article.node.title,
      description: firstSentenceContainingQuery + "...",
      category: t("search.article"),
      slug: `/news/${article.node.slug}`,
    }
  }

  const materialMatchesQuery = (
    material,
    generalInformationText,
    applicationText
  ) => {
    return (
      material.node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.node.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.node.pH.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.node.inci.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.node.cas.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.node.form.toLowerCase().includes(searchQuery.toLowerCase()) ||
      generalInformationText
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      applicationText.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const mapMaterialData = material => {
    const generalInformationContent = JSON.parse(
      material.node.generalInformation.raw
    ).content
    const generalInformationText = getDescriptionText(generalInformationContent)

    const applicationContent = JSON.parse(material.node.application.raw).content
    const applicationText = getDescriptionText(applicationContent)

    let firstSentenceContainingQuery =
      generalInformationText.slice(0, 50) + "..." + applicationText.slice(0, 50)

    if (material.node.color.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${material.node.color}`
    }
    if (material.node.pH.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${material.node.pH}`
    }
    if (material.node.inci.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${material.node.inci}`
    }
    if (material.node.cas.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${material.node.cas}`
    }
    if (material.node.form.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${material.node.form}`
    }

    const encodedSearchQuery = encodeURIComponent(material.node.title)

    return {
      title: material.node.title,
      description: firstSentenceContainingQuery + "...",
      category: t("search.material"),
      slug: `/materials?query=${encodedSearchQuery}`,
    }
  }

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
