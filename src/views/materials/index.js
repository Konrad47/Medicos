import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import MaterialsHeader from "./components/materialsHeader"
import Layout from "../../components/layout"
import MaterialsContent from "./components/materialsContent"

const Materials = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.materials.title`}
        description={t`seo.materials.description`}
      />
      <MaterialsHeader />
      <MaterialsContent />
    </Layout>
  )
}
export default Materials
