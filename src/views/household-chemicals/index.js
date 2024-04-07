import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import MaterialComponent from "../../components/materialComponent/materialComponent"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"

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

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterials(
        filter: { category: { eq: "Chemia gospodarcza" } }
      ) {
        edges {
          node {
            category
            color
            node_locale
            pH
            slug
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

  const titleDiscover = `${t`household-chemicals.discover.title`}`
  const descriptionDiscover = `${t`household-chemicals.discover.description`}`

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
        materialDiscover={materials}
        titleDiscover={titleDiscover}
        descriptionDiscover={descriptionDiscover}
        t={t}
      />
    </Layout>
  )
}
export default HouseholdChemicals
