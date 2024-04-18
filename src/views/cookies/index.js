import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import DocumentComponent from "../../components/documentComponent/documentComponent"

const Cookies = () => {
  const { t } = useTranslation()

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
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
    }
  `)
  const [cookies, setCookies] = useState()

  useEffect(() => {
    const getData = () => {
      const getCookies = getCurrentTranslations(
        data.allContentfulCookies.edges,
        language
      )

      console.log(getCookies)
      setCookies(getCookies[0])
    }
    getData()
    console.log(cookies)
  }, [data.allContentfulCookies, language])

  return (
    <Layout>
      <Seo
        title={t`seo.cookies.title`}
        description={t`seo.cookies.description`}
      />
      {cookies && (
        <DocumentComponent
          documentDate={cookies.node.updatedAt}
          documentTitle={cookies.node.title}
          documentDescription={cookies.node.description}
          t={t}
        />
      )}
    </Layout>
  )
}
export default Cookies
