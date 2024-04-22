import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import getCurrentTranslations from "../../components/contentful-translator"
import { graphql, useStaticQuery } from "gatsby"
import { richTextRenderOptions } from "../../utils/templateRenderOption"
import HomeHeader from "./components/homeHeader"
import HomeIndustries from "./components/homeIndustries"
import Layout from "../../components/layout"
import HomeAbout from "./components/homeAbout"
import HomeServices from "./components/homeServices"
import HomeNeeds from "./components/homeNeeds"
import HomeBlog from "./components/homeBlog"

const Home = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t`seo.home.title`} description={t`seo.home.description`} />
      <HomeHeader />
      <HomeIndustries />
      <HomeAbout />
      <HomeServices />
      <HomeNeeds />
      <HomeBlog />
    </Layout>
  )
}
export default Home
