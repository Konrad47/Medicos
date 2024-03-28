import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import getCurrentTranslations from "../../components/contentful-translator"
import { graphql, useStaticQuery } from "gatsby"
import { richTextRenderOptions } from "../../utils/templateRenderOption"
import "./styles/home.css"
import HomeHeader from "./components/homeHeader"
import HomeIndustries from "./components/homeIndustries"
import Layout from "../../components/layout"
import HomeAbout from "./components/homeAbout"
import HomeServices from "./components/homeServices"
import HomeNeeds from "./components/homeNeeds"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulExampleModel {
        edges {
          node {
            node_locale
            title
            description {
              raw
              references {
                ... on ContentfulAsset {
                  __typename
                  contentful_id
                  file {
                    url
                  }
                }
                title
              }
            }
          }
        }
      }
    }
  `)

  const [example, setExample] = useState()

  useEffect(() => {
    const getData = () => {
      const getExample = getCurrentTranslations(
        data.allContentfulExampleModel.edges,
        language
      )
      setExample(getExample)
    }
    getData()
  }, [data.allContentfulExampleModel, language])

  return (
    <Layout>
      <Seo title={t`seo.home.title`} description={t`seo.home.description`} />
      {/* <div className="home-con">
        <h1 className="h1-style">Home Page</h1>
        {example &&
          renderRichText(example[0].node.description, richTextRenderOptions)}
        <h1 className="h1-style">Home Page</h1>
      </div> */}
      <HomeHeader />
      <HomeIndustries />
      <HomeAbout />
      <HomeServices />
      <HomeNeeds />
    </Layout>
  )
}
export default Home
