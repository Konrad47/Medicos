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

      setRodo(getRodo[0])
    }
    getData()
  }, [data.allContentfulRodo, language])

  const textLastUpdate = `${t`rodo.last-update`}`
  const texttitle = `${t`rodo.title`}`
  const textCertificate1 = `${t`rodo.certificate-1`}`
  const textCertificate2 = `${t`rodo.certificate-2`}`
  const textCertificate3 = `${t`rodo.certificate-3`}`
  const textSee = `${t`rodo.see`}`

  return (
    <Layout>
      <Seo title={t`seo.rodo.title`} description={t`seo.rodo.description`} />
      {rodo && (
        <DocumentComponent
          documentDate={rodo.node.updatedAt}
          documentTitle={rodo.node.title}
          documentDescription={rodo.node.description}
          textLastUpdate={textLastUpdate}
          texttitle={texttitle}
          textCertificate1={textCertificate1}
          textCertificate2={textCertificate2}
          textCertificate3={textCertificate3}
          textSee={textSee}
        />
      )}
    </Layout>
  )
}
export default Rodo
