import React, { useState } from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import MaterialsHeader from "./components/materialsHeader"
import Layout from "../../components/layout"
import MaterialsFilter from "./components/materialsFilter"

const Materials = () => {
  const { t } = useTranslation()

  const [searchMaterial, setSearchMaterial] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedSort, setSelectedSort] = useState("name-up")

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
      />
    </Layout>
  )
}
export default Materials
