import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.contact.title`}
        description={t`seo.contact.description`}
      />
      <h1>Contact Page</h1>
    </Layout>
  )
}
export default Contact
