import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const OtherIndustries = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.other-industries.title`}
        description={t`seo.other-industries.description`}
      />
    </Layout>
  )
}
export default OtherIndustries
