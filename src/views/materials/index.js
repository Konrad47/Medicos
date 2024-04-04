import React, { useEffect, useState, useContext } from "react"
import Seo from "../../components/seo"
import {
  useTranslation,
  I18nextContext,
  Link,
} from "gatsby-plugin-react-i18next"
import MaterialsHeader from "./components/materialsHeader"
import Layout from "../../components/layout"
import MaterialsFilter from "./components/materialsFilter"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../components/contentful-translator"
import MaterialsContent from "./components/materialsContent"
import MaterialsDontFind from "./components/materialsDontFind"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "react-bootstrap/Dropdown"

const Materials = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterials {
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
  const [searchMaterial, setSearchMaterial] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState([
    "Chemia gospodarcza",
    "Kosmetyka",
    "Farmacja",
    "Żywność i suplementy diety",
    "Pozostałe branże",
  ])
  const [selectedSort, setSelectedSort] = useState("name-up")
  const [searchedData, setSearchedData] = useState([])

  useEffect(() => {
    const getData = () => {
      const materials = getCurrentTranslations(
        data.allContentfulMaterials.edges,
        language
      )

      let filteredMaterials = materials.filter(material => {
        const titleMatches = material.node.title
          .toLowerCase()
          .includes(searchMaterial.toLowerCase())
        const inciMatches = material.node.inci
          .toLowerCase()
          .includes(searchMaterial.toLowerCase())
        const casMatches = material.node.cas
          .toLowerCase()
          .includes(searchMaterial.toLowerCase())
        const categoryMatches = material.node.category.some(category =>
          selectedIndustry.some(industry =>
            category.toLowerCase().includes(industry.toLowerCase())
          )
        )

        return (titleMatches || inciMatches || casMatches) && categoryMatches
      })

      const sortedMaterials = filteredMaterials.sort((a, b) => {
        if (selectedSort === "name-up") {
          return a.node.title.localeCompare(b.node.title)
        } else if (selectedSort === "name-down") {
          return b.node.title.localeCompare(a.node.title)
        } else if (selectedSort === "inci-up") {
          return a.node.inci.localeCompare(b.node.inci)
        } else if (selectedSort === "inci-down") {
          return b.node.inci.localeCompare(a.node.inci)
        }
      })

      setSearchedData(sortedMaterials)
      console.log(sortedMaterials)
      console.log(selectedIndustry)
    }

    getData()
  }, [
    data.allContentfulMaterials,
    language,
    searchMaterial,
    selectedIndustry,
    selectedSort,
  ])

  const handleSearchMaterialChange = value => {
    setSearchMaterial(value)
    console.log(searchMaterial)
  }

  const handleSelectedIndustryChange = value => {
    setSelectedIndustry(value)
    console.log(selectedIndustry)
  }

  const handleSelectedSortChange = value => {
    setSelectedSort(value)
    console.log(selectedSort)
  }

  const resetFilters = () => {
    setSearchMaterial("")
    setSelectedIndustry([
      "Chemia gospodarcza",
      "Kosmetyka",
      "Farmacja",
      "Żywność i suplementy diety",
      "Pozostałe branże",
    ])
    setSelectedSort("name-up")
  }

  return (
    <Layout>
      <Seo
        title={t`seo.materials.title`}
        description={t`seo.materials.description`}
      />
      <MaterialsHeader />
      <MaterialsFilter
        onSearchMaterialChange={handleSearchMaterialChange}
        onSelectedIndustryChange={handleSelectedIndustryChange}
        onSelectedSortChange={handleSelectedSortChange}
        searchMaterial={searchMaterial}
        selectedIndustry={selectedIndustry}
        selectedSort={selectedSort}
        resetFilters={resetFilters}
      />
      <MaterialsContent
        materialsContent={searchedData}
        resetFilters={resetFilters}
      />
      <MaterialsDontFind />
    </Layout>
  )
}
export default Materials
