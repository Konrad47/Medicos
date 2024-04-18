import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import DocumentComponent from "../../components/documentComponent/documentComponent"

const Rodo = () => {
  const { t } = useTranslation()

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
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
    }
  `)
  const [rodo, setRodo] = useState()

  useEffect(() => {
    const getData = () => {
      const getRodo = getCurrentTranslations(
        data.allContentfulRodo.edges,
        language
      )

      console.log(getRodo)
      setRodo(getRodo[0])
    }
    getData()
    console.log(rodo)
  }, [data.allContentfulRodo, language])

  return (
    <Layout>
      <Seo title={t`seo.rodo.title`} description={t`seo.rodo.description`} />
      {rodo && (
        <DocumentComponent
          documentDate={rodo.node.updatedAt}
          documentTitle={rodo.node.title}
          documentDescription={rodo.node.description}
          t={t}
        />
      )}
    </Layout>
  )
}
export default Rodo