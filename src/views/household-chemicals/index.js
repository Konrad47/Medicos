import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"

const HouseholdChemicals = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.household-chemicals.title`}
        description={t`seo.household-chemicals.description`}
      />
    </Layout>
  )
}
export default HouseholdChemicals
