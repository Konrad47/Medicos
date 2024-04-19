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
      allContentfulCookies {
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
      allContentfulRodo {
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

  console.log(data)

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

    const processCookies = () => {
      const cookies = getCurrentTranslations(
        data.allContentfulCookies.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredCookies = cookies
          .filter(cookie => {
            const descriptionContent = JSON.parse(
              cookie.node.description.raw
            ).content
            const descriptionText = getDescriptionText(descriptionContent)
            return documentMatchesQuery(cookie, descriptionText)
          })
          .map(cookie => mapDocumentData(cookie, "/cookies"))

        setSearchedData(prevData => [...prevData, ...filteredCookies])
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

    const processRodo = () => {
      const rodo = getCurrentTranslations(
        data.allContentfulRodo.edges,
        language
      )
      if (searchQuery && searchQuery.trim() !== "") {
        const filteredRodo = rodo
          .filter(rodo => {
            const descriptionContent = JSON.parse(
              rodo.node.description.raw
            ).content
            const descriptionText = getDescriptionText(descriptionContent)
            return documentMatchesQuery(rodo, descriptionText)
          })
          .map(rodo => mapDocumentData(rodo, "/rodo"))

        setSearchedData(prevData => [...prevData, ...filteredRodo])
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

    const processLocales = () => {
      const locales = getLocaleTranslations(data.allLocale.edges, language)
      console.log(locales)

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
    processCookies()
    processPrivacyPolicy()
    processRodo()
    processTeam()
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

  const contactMatchesQuery = contact => {
    return (
      contact.node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.krs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.nip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.purchaseNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      contact.node.registration
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      contact.node.regon.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.salesNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      contact.node.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.node.zipCode.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const mapContactData = contact => {
    let firstSentenceContainingQuery = ""

    if (contact.node.email.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${contact.node.email}`
    }
    if (contact.node.krs.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${contact.node.krs}`
    }
    if (contact.node.nip.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${contact.node.nip}`
    }
    if (
      contact.node.purchaseNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      firstSentenceContainingQuery += `...${contact.node.purchaseNumber}`
    }
    if (
      contact.node.registration
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      firstSentenceContainingQuery += `...${contact.node.registration}`
    }
    if (contact.node.regon.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${contact.node.regon}`
    }
    if (
      contact.node.salesNumber.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      firstSentenceContainingQuery += `...${contact.node.salesNumber}`
    }
    if (contact.node.street.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${contact.node.street}`
    }
    if (
      contact.node.zipCode.toLowerCase().includes(searchQuery.toLowerCase())
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
      category: t("search.contact"),
      slug: `/contact`,
    }
  }

  const documentMatchesQuery = (document, descriptionText) => {
    return (
      document.node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment(document.node.updatedAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      descriptionText.toLowerCase().includes(searchQuery.toLowerCase())
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
      moment(document.node.updatedAt)
        .format("DD/MM/YYYY HH:MM")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
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
      team.node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.node.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.node.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.node.description.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  }

  const mapTeamData = team => {
    const descriptionText = team.node.description.description
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

    if (team.node.education.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${team.node.education}`
    }

    if (team.node.role.toLowerCase().includes(searchQuery.toLowerCase())) {
      firstSentenceContainingQuery += `...${team.node.role}`
    }

    return {
      title: team.node.name,
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
        text += "; "
      }
    }
    console.log(text)
    return text
  }

  const localeMatchesQuery = locale => {
    return (
      locale.node.data.toLowerCase().includes(searchQuery.toLowerCase()) &&
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

    const queryIndex = dataText.toLowerCase().indexOf(searchQuery.toLowerCase())
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
