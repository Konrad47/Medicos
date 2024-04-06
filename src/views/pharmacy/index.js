import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const Pharmacy = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.pharmacy.title`}
        description={t`seo.pharmacy.description`}
      />
    </Layout>
  )
}
export default Pharmacy
