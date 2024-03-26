import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/materialsFilter.css"

const MaterialsFilter = ({
  onSearchMaterialChange,
  onSelectedIndustryChange,
  onSelectedSortChange,
  searchMaterial,
  selectedIndustry,
  selectedSort,
  resetFilters,
}) => {
  const { t } = useTranslation()

  const handleSearchMaterialChange = event => {
    const value = event.target.value
    onSearchMaterialChange(value)
  }

  const handleSelectedIndustryChange = event => {
    const value = event.target.value
    onSelectedIndustryChange(value)
  }

  const handleSelectedSortChange = event => {
    const value = event.target.value
    onSelectedSortChange(value)
  }

  return (
    <>
      <div className="materials-f-container">
        <div className="container">
          <div className="filter-con">
            <div className="filters">
              <div>
                <label for="material">{t`materials-filter.search-material`}</label>
                <input
                  className="material-input"
                  id="material"
                  placeholder={t`materials-filter.search`}
                  value={searchMaterial}
                  onChange={handleSearchMaterialChange}
                ></input>
              </div>
              <div>
                <label for="industries">{t`materials-filter.industry`}</label>
                <select
                  className="material-select"
                  id="industries"
                  value={selectedIndustry}
                  onChange={handleSelectedIndustryChange}
                >
                  <option value="">{t`materials-filter.all-industries`}</option>
                  <option value="Chemia gospodarcza">{t`materials-filter.household-chemicals`}</option>
                  <option value="Kosmetyka">{t`materials-filter.cosmetology`}</option>
                  <option value="Farmacja">{t`materials-filter.pharmacy`}</option>
                  <option value="Żywność i suplementy diety">{t`materials-filter.food`}</option>
                  <option value="Pozostałe branże">{t`materials-filter.other-industries`}</option>
                </select>
              </div>
              <div>
                <label for="sort">{t`materials-filter.sort`}</label>
                <select
                  className="material-select"
                  id="sort"
                  value={selectedSort}
                  onChange={handleSelectedSortChange}
                >
                  <option value="name-up">{t`materials-filter.name-up`}</option>
                  <option value="name-down">{t`materials-filter.name-down`}</option>
                  <option value="inci-up">{t`materials-filter.inci-up`}</option>
                  <option value="inci-down">{t`materials-filter.inci-down`}</option>
                </select>
              </div>
            </div>
            <p onClick={resetFilters}>{t`materials-filter.clean-filters`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaterialsFilter
