import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Materials = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t`seo.materials.title`}
        description={t`seo.materials.description`}
      />
      <h1>Materials Page</h1>
    </>
  )
}
export default Materials
