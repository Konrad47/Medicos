import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import DocumentComponent from "../../components/documentComponent/documentComponent"

const PrivacyPolicy = () => {
  const { t } = useTranslation()

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
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
    }
  `)
  const [privacyPolicy, setPrivacyPolicy] = useState()

  useEffect(() => {
    const getData = () => {
      const getPrivacyPolicy = getCurrentTranslations(
        data.allContentfulPrivacyPolicy.edges,
        language
      )

      console.log(getPrivacyPolicy)
      setPrivacyPolicy(getPrivacyPolicy[0])
    }
    getData()
    console.log(privacyPolicy)
  }, [data.allContentfulPrivacyPolicy, language])

  return (
    <Layout>
      <Seo
        title={t`seo.privacy-policy.title`}
        description={t`seo.privacy-policy.description`}
      />
      {privacyPolicy && (
        <DocumentComponent
          documentDate={privacyPolicy.node.updatedAt}
          documentTitle={privacyPolicy.node.title}
          documentDescription={privacyPolicy.node.description}
          t={t}
        />
      )}
    </Layout>
  )
}
export default PrivacyPolicy
