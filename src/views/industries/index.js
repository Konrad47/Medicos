import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Industries = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t`seo.industries.title`}
        description={t`seo.industries.description`}
      />
      <h1>Industries Page</h1>
    </>
  )
}
export default Industries
