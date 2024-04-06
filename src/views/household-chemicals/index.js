import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import MaterialComponent from "../../components/materialComponent/materialComponent"
import { StaticImage } from "gatsby-plugin-image"

const HouseholdChemicals = () => {
  const { t } = useTranslation()

  const backgroundHeader = "hc-background"
  const titleHeader = `${t`household-chemicals.header.title`}`
  const descriptionHeader = `${t`household-chemicals.header.description`}`
  const imageApplication = () => (
    <StaticImage
      className="right-image"
      src="../../images/household-chemicals/application/material-hc-application.png"
      alt="Right image"
      placeholder="Right image"
      loading="lazy"
    />
  )

  const titleApplication = `${t`household-chemicals.application.title`}`
  const descriptionApplication = `${t`household-chemicals.application.description`}`

  return (
    <Layout>
      <Seo
        title={t`seo.household-chemicals.title`}
        description={t`seo.household-chemicals.description`}
      />
      <MaterialComponent
        backgroundHeader={backgroundHeader}
        titleHeader={titleHeader}
        descriptionHeader={descriptionHeader}
        imageApplication={imageApplication}
        titleApplication={titleApplication}
        descriptionApplication={descriptionApplication}
      />
    </Layout>
  )
}
export default HouseholdChemicals
