import React, { useState, useEffect, useContext } from "react"
import Seo from "../../components/seo"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import MaterialComponent from "../../components/materialComponent/materialComponent"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"

const Pharmacy = () => {
  const { t } = useTranslation()

  const backgroundHeader = "hc-background"
  const titleHeader = `${t`pharmacy.header.title`}`
  const descriptionHeader = `${t`pharmacy.header.description`}`
  const imageApplication = () => (
    <StaticImage
      className="right-image"
      src="../../images/pharmacy/application/material-p-application.png"
      alt="Right image"
      placeholder="Right image"
      loading="lazy"
    />
  )

  const titleApplication = `${t`pharmacy.application.title`}`
  const descriptionApplication = `${t`pharmacy.application.description`}`

  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterials(filter: { category: { eq: "Farmacja" } }) {
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

  const titleDiscover = `${t`pharmacy.discover.title`}`
  const descriptionDiscover = `${t`pharmacy.discover.description`}`
  const materialQuery = "pharmacy"

  return (
    <Layout>
      <Seo
        title={t`seo.pharmacy.title`}
        description={t`seo.pharmacy.description`}
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
export default Pharmacy
