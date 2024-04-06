import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const Food = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t`seo.food.title`} description={t`seo.food.description`} />
    </Layout>
  )
}
export default Food
