import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import getCurrentTranslations from "../../components/contentful-translator"
import { graphql, useStaticQuery } from "gatsby"
import { richTextRenderOptions } from "../../utils/templateRenderOption"
import Menu from "../../components/menu/menu"
import "./styles/home.css"
import Footer from "../../components/footer/footer"
import Header from "./components/header"

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
    <>
      <Seo title={t`seo.home.title`} description={t`seo.home.description`} />
      <Menu />
      {/* <div className="home-con">
        <h1 className="h1-style">Home Page</h1>
        {example &&
          renderRichText(example[0].node.description, richTextRenderOptions)}
        <h1 className="h1-style">Home Page</h1>
      </div> */}
      <Header />
      <Footer />
    </>
  )
}
export default Home
