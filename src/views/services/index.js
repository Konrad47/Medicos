import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Services = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t`seo.services.title`}
        description={t`seo.services.description`}
      />
      <h1>Services Page</h1>
    </>
  )
}
export default Services
