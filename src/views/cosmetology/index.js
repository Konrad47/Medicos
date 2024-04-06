import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const Cosmetology = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.cosmetology.title`}
        description={t`seo.cosmetology.description`}
      />
    </Layout>
  )
}
export default Cosmetology
