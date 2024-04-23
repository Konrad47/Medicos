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
import getLocaleTranslations from "../../components/locale-translator"

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
      allContentfulContact {
        edges {
          node {
            email
            krs
            name
            nip
            node_locale
            purchaseNumber
            registration
            regon
            salesNumber
            street
            zipCode
          }
        }
      }
      allContentfulPrivacyPolicy {
        edges {
          node {
            title
            node_locale
            description {
              raw
            }
            updatedAt
          }
        }
      }
      allContentfulTeam {
        edges {
          node {
            node_locale
            name
            education
            role
            description {
              description
            }
          }
        }
      }
      allContentfulCooperationRulesFiles {
        edges {
          node {
            node_locale
            title
          }
        }
      }
      allContentfulQualityPolicyFiles {
        edges {
          node {
            node_locale
            title
          }
        }
      }
      allLocale {
        edges {
          node {
            ns
            language
            data
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

    const processContact = () => {
      const contact = getCurrentTranslations(
        data.allContentfulContact.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredContact = contact
          .filter(con => {
            return contactMatchesQuery(con)
          })
          .map(con => mapContactData(con))

        setSearchedData(prevData => [...prevData, ...filteredContact])
      }
    }
    const processPrivacyPolicy = () => {
      const privacyPolicy = getCurrentTranslations(
        data.allContentfulPrivacyPolicy.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredPrivacyPolicy = privacyPolicy
          .filter(pp => {
            const descriptionContent = JSON.parse(
              pp.node.description.raw
            ).content
            const descriptionText = getDescriptionText(descriptionContent)
            return documentMatchesQuery(pp, descriptionText)
          })
          .map(pp => mapDocumentData(pp, "/privacy-policy"))

        setSearchedData(prevData => [...prevData, ...filteredPrivacyPolicy])
      }
    }

    const processTeam = () => {
      const team = getCurrentTranslations(
        data.allContentfulTeam.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredTeam = team
          .filter(team => {
            return teamMatchesQuery(team)
          })
          .map(team => mapTeamData(team))

        setSearchedData(prevData => [...prevData, ...filteredTeam])
      }
    }

    const processRulesFiles = () => {
      const rulesFiles = getCurrentTranslations(
        data.allContentfulCooperationRulesFiles.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredRulesFiles = rulesFiles
          .filter(con => {
            return filesMatchesQuery(con)
          })
          .map(con => mapFilesData(con))

        setSearchedData(prevData => [...prevData, ...filteredRulesFiles])
      }
    }

    const processPolicyFiles = () => {
      const policyFiles = getCurrentTranslations(
        data.allContentfulQualityPolicyFiles.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredPolicyFiles = policyFiles
          .filter(con => {
            return filesMatchesQuery(con)
          })
          .map(con => mapFilesData(con))

        setSearchedData(prevData => [...prevData, ...filteredPolicyFiles])
      }
    }

    const processLocales = () => {
      const locales = getLocaleTranslations(data.allLocale.edges, language)

      if (searchQuery && searchQuery.trim() !== "") {
        const filteredLocales = locales
          .filter(locale => {
            const dataContent = JSON.parse(locale.node.data)
            const dataText = getDataText(dataContent)
            return localeMatchesQuery(locale, dataText)
          })
          .map(locale => mapLocaleData(locale))

        setSearchedData(prevData => [...prevData, ...filteredLocales])
      }
    }

    processArticles()
    processMaterials()
    processContact()
    processPrivacyPolicy()
    processTeam()
    processRulesFiles()
    processPolicyFiles()
    processLocales()
  }, [data, language, searchQuery])

  const getDescriptionText = content => {
    return content
      .filter(node => node?.content[0]?.nodeType === "text")
      .map(paragraph => paragraph.content.map(({ value }) => value).join(""))
      .join(" ")
  }

  const articleMatchesQuery = (article, descriptionText) => {
    return (
      article.node.title
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      article.node.author
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      moment(article.node.createdAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      descriptionText
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
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
      .normalize("NFC")
      .indexOf(searchQuery.toLowerCase().normalize("NFC"))
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
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${moment(
        article.node.createdAt
      ).format("DD/MM/YYYY HH:MM")}`
    }

    if (
      article.node.author
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
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
      material.node.title
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      material.node.color
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      material.node.pH
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      material.node.inci
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      material.node.cas
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      material.node.form
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      generalInformationText
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      applicationText
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
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

    if (
      material.node.color
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${material.node.color}`
    }
    if (
      material.node.pH
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${material.node.pH}`
    }
    if (
      material.node.inci
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${material.node.inci}`
    }
    if (
      material.node.cas
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${material.node.cas}`
    }
    if (
      material.node.form
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
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

  const contactMatchesQuery = contact => {
    return (
      contact.node.name
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.email
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.krs
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.nip
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.purchaseNumber
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.registration
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.regon
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.salesNumber
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.street
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      contact.node.zipCode
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    )
  }

  const mapContactData = contact => {
    let firstSentenceContainingQuery = ""

    if (
      contact.node.email
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.email}`
    }
    if (
      contact.node.krs
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.krs}`
    }
    if (
      contact.node.nip
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.nip}`
    }
    if (
      contact.node.purchaseNumber
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.purchaseNumber}`
    }
    if (
      contact.node.registration
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.registration}`
    }
    if (
      contact.node.regon
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.regon}`
    }
    if (
      contact.node.salesNumber
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.salesNumber}`
    }
    if (
      contact.node.street
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.street}`
    }
    if (
      contact.node.zipCode
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${contact.node.zipCode}`
    }
    if (firstSentenceContainingQuery === "") {
      firstSentenceContainingQuery += `...${contact.node.email}`
      firstSentenceContainingQuery += `...${contact.node.krs}`
      firstSentenceContainingQuery += `...${contact.node.nip}`
      firstSentenceContainingQuery += `...${contact.node.purchaseNumber}`
      firstSentenceContainingQuery += `...${contact.node.registration}`
      firstSentenceContainingQuery += `...${contact.node.regon}`
      firstSentenceContainingQuery += `...${contact.node.salesNumber}`
      firstSentenceContainingQuery += `...${contact.node.street}`
      firstSentenceContainingQuery += `...${contact.node.zipCode}`
    }

    return {
      title: contact.node.name,
      description: firstSentenceContainingQuery + "...",
      category: t("search.page"),
      slug: `/contact`,
    }
  }

  const documentMatchesQuery = (document, descriptionText) => {
    return (
      document.node.title
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      moment(document.node.updatedAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      descriptionText
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    )
  }

  const mapDocumentData = (document, slug) => {
    const descriptionContent = JSON.parse(document.node.description.raw).content
    const descriptionText = getDescriptionText(descriptionContent)
    let firstSentenceContainingQuery = descriptionText.slice(0, 100)
    let startIndex = 0
    let endIndex = descriptionText.length - 1

    const queryIndex = descriptionText
      .toLowerCase()
      .normalize("NFC")
      .indexOf(searchQuery.toLowerCase().normalize("NFC"))
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
      moment(document.node.updatedAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${moment(
        document.node.updatedAt
      ).format("DD/MM/YYYY HH:MM")}`
    }

    return {
      title: document.node.title,
      description: firstSentenceContainingQuery + "...",
      category: t("search.page"),
      slug: `${slug}`,
    }
  }

  const teamMatchesQuery = team => {
    return (
      team.node.name
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      team.node.education
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      team.node.role
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) ||
      team.node.description.description
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    )
  }

  const mapTeamData = team => {
    const descriptionText = team.node.description.description
    let firstSentenceContainingQuery = descriptionText.slice(0, 100)
    let startIndex = 0
    let endIndex = descriptionText.length - 1

    const queryIndex = descriptionText
      .toLowerCase()
      .normalize("NFC")
      .indexOf(searchQuery.toLowerCase().normalize("NFC"))
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
      team.node.education
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${team.node.education}`
    }

    if (
      team.node.role
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${team.node.role}`
    }

    return {
      title: team.node.name,
      description: firstSentenceContainingQuery + "...",
      category: t("search.page"),
      slug: `/about`,
    }
  }

  const filesMatchesQuery = file => {
    return file.node.title
      .toLowerCase()
      .normalize("NFC")
      .includes(searchQuery.toLowerCase().normalize("NFC"))
  }

  const mapFilesData = file => {
    let firstSentenceContainingQuery = ""

    if (
      file.node.title
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC"))
    ) {
      firstSentenceContainingQuery += `...${file.node.title}`
    }

    return {
      title: file.node.title,
      description: firstSentenceContainingQuery + "...",
      category: t("search.page"),
      slug: `/about`,
    }
  }

  const getDataText = content => {
    let text = ""
    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        text += content[key]
        text += "... "
      }
    }
    return text
  }

  const localeMatchesQuery = locale => {
    return (
      locale.node.data
        .toLowerCase()
        .normalize("NFC")
        .includes(searchQuery.toLowerCase().normalize("NFC")) &&
      locale.node.ns !== "search" &&
      locale.node.ns !== "seo" &&
      locale.node.ns !== "error"
    )
  }

  const mapLocaleData = locale => {
    const dataContent = JSON.parse(locale.node.data)
    const dataText = getDataText(dataContent)
    let firstSentenceContainingQuery = dataText.slice(0, 150)
    let startIndex = 0
    let endIndex = dataText.length - 1

    const queryIndex = dataText
      .toLowerCase()
      .normalize("NFC")
      .indexOf(searchQuery.toLowerCase().normalize("NFC"))
    if (queryIndex !== -1) {
      const queryLength = searchQuery.length
      startIndex = Math.max(0, queryIndex - 75)
      endIndex = Math.min(dataText.length - 1, queryIndex + queryLength + 75)
      firstSentenceContainingQuery =
        "..." + dataText.slice(startIndex, endIndex)
    }

    if (
      locale.node.ns === "cookie-bar" ||
      locale.node.ns === "footer" ||
      locale.node.ns === "menu"
    ) {
      return {
        title: firstSentenceContainingQuery.slice(0, 50),
        description: firstSentenceContainingQuery + "...",
        category: t("search.others"),
        slug: `/`,
      }
    } else if (locale.node.ns === "home") {
      return {
        title: firstSentenceContainingQuery.slice(0, 50),
        description: firstSentenceContainingQuery + "...",
        category: t("search.page"),
        slug: `/`,
      }
    } else {
      return {
        title: firstSentenceContainingQuery.slice(0, 50),
        description: firstSentenceContainingQuery + "...",
        category: t("search.page"),
        slug: `/${locale.node.ns}`,
      }
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
