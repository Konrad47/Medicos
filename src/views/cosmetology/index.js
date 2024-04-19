import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import MaterialComponent from "../../components/materialComponent/materialComponent"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"

const Cosmetology = () => {
  const { t } = useTranslation()

  const backgroundHeader = "hc-background"
  const titleHeader = `${t`cosmetology.header.title`}`
  const descriptionHeader = `${t`cosmetology.header.description`}`
  const imageApplication = () => (
    <StaticImage
      className="right-image"
      src="../../images/cosmetology/application/material-c-application.png"
      alt="Right image"
      placeholder="Right image"
      loading="lazy"
    />
  )

  const titleApplication = `${t`cosmetology.application.title`}`
  const descriptionApplication = `${t`cosmetology.application.description`}`

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterials(
        filter: { category: { eq: "Kosmetyka" } }
        sort: { createdAt: ASC }
        limit: 6
      ) {
        edges {
          node {
            category
            color
            node_locale
            pH
            title
            inci
            cas
            form
            generalInformation {
              raw
            }
            application {
              raw
            }
          }
        }
      }
    }
  `)
  const [materials, setMaterials] = useState()

  useEffect(() => {
    const getData = () => {
      const getMaterials = getCurrentTranslations(
        data.allContentfulMaterials.edges,
        language
      )

      console.log(getMaterials)
      setMaterials(getMaterials)
    }
    getData()
    console.log(materials)
  }, [data.allContentfulMaterials, language])

  const titleDiscover = `${t`cosmetology.discover.title`}`
  const descriptionDiscover = `${t`cosmetology.discover.description`}`
  const materialQuery = "cosmetology"

  return (
    <Layout>
      <Seo
        title={t`seo.cosmetology.title`}
        description={t`seo.cosmetology.description`}
      />
      <MaterialComponent
        backgroundHeader={backgroundHeader}
        titleHeader={titleHeader}
        descriptionHeader={descriptionHeader}
        imageApplication={imageApplication}
        titleApplication={titleApplication}
        descriptionApplication={descriptionApplication}
        materialDiscover={materials}
        titleDiscover={titleDiscover}
        descriptionDiscover={descriptionDiscover}
        t={t}
        materialQuery={materialQuery}
      />
    </Layout>
  )
}
export default Cosmetology
