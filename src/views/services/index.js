import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import ServicesHeader from "./components/servicesHeader"
import ServicesOurServices from "./components/servicesOurServices"

const Services = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo
        title={t`seo.services.title`}
        description={t`seo.services.description`}
      />
      <ServicesHeader />
      <ServicesOurServices />
    </Layout>
  )
}
export default Services
