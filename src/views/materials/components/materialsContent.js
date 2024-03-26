import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/materialsContent.css"

const MaterialsContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="materials-c-container">
        <div className="container">
          <div className="filter-con">
            <div className="filters">
              <div>
                <label for="material">{t`materials-content.search-material`}</label>
                <input
                  id="material"
                  placeholder={t`materials-content.search`}
                ></input>
              </div>
              <div>
                <label for="industries">{t`materials-content.industry`}</label>
                <select id="industries">
                  <option value="">{t`materials-content.all-industries`}</option>
                  <option value="Chemia gospodarcza">{t`materials-content.household-chemicals`}</option>
                  <option value="Kosmetyka">{t`materials-content.cosmetology`}</option>
                  <option value="Farmacja">{t`materials-content.pharmacy`}</option>
                  <option value="Żywność i suplementy diety">{t`materials-content.food`}</option>
                  <option value="Pozostałe branże">{t`materials-content.other-industries`}</option>
                </select>
              </div>
              <div>
                <label for="sort">{t`materials-content.sort`}</label>
                <select id="sort">
                  <option value="name-up">{t`materials-content.name-up`}</option>
                  <option value="name-down">{t`materials-content.name-down`}</option>
                  <option value="inci-up">{t`materials-content.inci-up`}</option>
                  <option value="inci-down">{t`materials-content.inci-down`}</option>
                </select>
              </div>
            </div>
            <p>{t`materials-content.clean-filters`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaterialsContent
