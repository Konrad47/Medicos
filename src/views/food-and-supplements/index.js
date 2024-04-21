import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import MaterialComponent from "../../components/materialComponent/materialComponent"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"

const Food = () => {
  const { t } = useTranslation()

  const backgroundHeader = "f-background"
  const titleHeader = `${t`food-and-supplements.header.title`}`
  const descriptionHeader = `${t`food-and-supplements.header.description`}`
  const imageApplication = () => (
    <StaticImage
      className="right-image"
      src="../../images/food/application/material-f-application.webp"
      alt="Right image"
      placeholder="Right image"
      loading="lazy"
    />
  )

  const titleApplication = `${t`food-and-supplements.application.title`}`
  const descriptionApplication = `${t`food-and-supplements.application.description`}`

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterials(
        filter: { category: { eq: "Żywność i suplementy diety" } }
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

  const titleDiscover = `${t`food-and-supplements.discover.title`}`
  const descriptionDiscover = `${t`food-and-supplements.discover.description`}`
  const materialQuery = "food-and-supplements"

  return (
    <Layout>
      <Seo
        title={t`seo.food-and-supplements.title`}
        description={t`seo.food-and-supplements.description`}
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
export default Food
