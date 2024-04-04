import React, { useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/materialsFilter.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "react-bootstrap/Dropdown"

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
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchMaterialChange = event => {
    const value = event.target.value
    onSearchMaterialChange(value)
  }

  const handleSelectedIndustryChange = event => {
    const value = event.target.value
    const isChecked = event.target.checked
    let updatedIndustry = [...selectedIndustry]
    if (isChecked) {
      updatedIndustry.push(value)
    } else {
      updatedIndustry = updatedIndustry.filter(item => item !== value)
    }
    onSelectedIndustryChange(updatedIndustry)
  }

  const handleAllIndustriesClick = () => {
    const allIndustries = [
      "Chemia gospodarcza",
      "Kosmetyka",
      "Farmacja",
      "Żywność i suplementy diety",
      "Pozostałe branże",
    ]
    const areAllChecked = allIndustries.every(industry =>
      selectedIndustry.includes(industry)
    )
    let updatedIndustry = [...selectedIndustry]
    if (areAllChecked) {
      updatedIndustry = updatedIndustry.filter(
        item => !allIndustries.includes(item)
      )
    } else {
      updatedIndustry = [
        ...updatedIndustry,
        ...allIndustries.filter(
          industry => !updatedIndustry.includes(industry)
        ),
      ]
    }
    onSelectedIndustryChange(updatedIndustry)
  }

  const handleSelectedSortChange = sortValue => {
    onSelectedSortChange(sortValue)
  }

  return (
    <>
      <div className="materials-f-container">
        <div className="container">
          <div className="filter-con">
            <div className="filters">
              <div className="input-filter">
                <label htmlFor="material">{t`materials-filter.search-material`}</label>
                <input
                  className="material-input"
                  id="material"
                  placeholder={
                    window.innerWidth > 568
                      ? `${t`materials-filter.search`}`
                      : `${t`materials-filter.search`}`.slice(0, 30) + "..."
                  }
                  value={searchMaterial}
                  onChange={handleSearchMaterialChange}
                />
              </div>
              <div>
                <label htmlFor="industries">{t`materials-filter.industry`}</label>
                <Dropdown id="industries" autoClose="outside">
                  <Dropdown.Toggle id="down-centered">
                    {selectedIndustry.length === 5 &&
                      `${t`materials-filter.all-industries`}`}
                    {selectedIndustry.length < 5 &&
                      selectedIndustry.length > 1 &&
                      selectedIndustry.length +
                        `${t`materials-filter.checked`}`}

                    {selectedIndustry.length === 1 &&
                      selectedIndustry.includes("Chemia gospodarcza") &&
                      `${t`materials-filter.household-chemicals`}`}
                    {selectedIndustry.length === 1 &&
                      selectedIndustry.includes("Kosmetyka") &&
                      `${t`materials-filter.cosmetology`}`}
                    {selectedIndustry.length === 1 &&
                      selectedIndustry.includes("Farmacja") &&
                      `${t`materials-filter.pharmacy`}`}
                    {selectedIndustry.length === 1 &&
                      selectedIndustry.includes("Żywność i suplementy diety") &&
                      `${t`materials-filter.food`}`}
                    {selectedIndustry.length === 1 &&
                      selectedIndustry.includes("Pozostałe branże") &&
                      `${t`materials-filter.other-industries`}`}
                    {selectedIndustry.length === 0 &&
                      `${t`materials-filter.none-checked`}`}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <p
                        onClick={handleAllIndustriesClick}
                      >{t`materials-filter.all-industries`}</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        id="householdChemicals"
                        value="Chemia gospodarcza"
                        checked={selectedIndustry.includes(
                          "Chemia gospodarcza"
                        )}
                        onChange={handleSelectedIndustryChange}
                      />
                      <label htmlFor="householdChemicals">{t`materials-filter.household-chemicals`}</label>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        id="cosmetology"
                        value="Kosmetyka"
                        checked={selectedIndustry.includes("Kosmetyka")}
                        onChange={handleSelectedIndustryChange}
                      />
                      <label htmlFor="cosmetology">{t`materials-filter.cosmetology`}</label>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        id="pharmacy"
                        value="Farmacja"
                        checked={selectedIndustry.includes("Farmacja")}
                        onChange={handleSelectedIndustryChange}
                      />
                      <label htmlFor="pharmacy">{t`materials-filter.pharmacy`}</label>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        id="food"
                        value="Żywność i suplementy diety"
                        checked={selectedIndustry.includes(
                          "Żywność i suplementy diety"
                        )}
                        onChange={handleSelectedIndustryChange}
                      />
                      <label htmlFor="food">{t`materials-filter.food`}</label>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        id="otherIndustries"
                        value="Pozostałe branże"
                        checked={selectedIndustry.includes("Pozostałe branże")}
                        onChange={handleSelectedIndustryChange}
                      />
                      <label htmlFor="otherIndustries">{t`materials-filter.other-industries`}</label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <label htmlFor="sort">{t`materials-filter.sort`}</label>
                <Dropdown id="sort">
                  <Dropdown.Toggle id="down-centered">
                    {selectedSort === "name-up" &&
                      `${t`materials-filter.name-up`}`}
                    {selectedSort === "name-down" &&
                      `${t`materials-filter.name-down`}`}
                    {selectedSort === "inci-up" &&
                      `${t`materials-filter.inci-up`}`}
                    {selectedSort === "inci-down" &&
                      `${t`materials-filter.inci-down`}`}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <p
                        onClick={() => handleSelectedSortChange("name-up")}
                      >{t`materials-filter.name-up`}</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <p
                        onClick={() => handleSelectedSortChange("name-down")}
                      >{t`materials-filter.name-down`}</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <p
                        onClick={() => handleSelectedSortChange("inci-up")}
                      >{t`materials-filter.inci-up`}</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <p
                        onClick={() => handleSelectedSortChange("inci-down")}
                      >{t`materials-filter.inci-down`}</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <p
              onClick={resetFilters}
              className="p-style"
            >{t`materials-filter.clean-filters`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaterialsFilter
