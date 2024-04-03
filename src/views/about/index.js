import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import AboutHeader from "./components/aboutHeader"
import AboutFirm from "./components/aboutFirm"
import AboutMission from "./components/aboutMission"
import AboutPolicy from "./components/aboutPolicy"
import AboutPeople from "./components/aboutPeople"

const About = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t`seo.about.title`} description={t`seo.about.description`} />
      <AboutHeader />
      <AboutFirm />
      <AboutMission />
      <AboutPolicy />
      <AboutPeople />
    </Layout>
  )
}
export default About
