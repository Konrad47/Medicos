import React, { useState, useEffect } from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/materialsContent.css"
import CustomPagination from "../../../components/pagination/pagination"

const MaterialsContent = ({ materialsContent, resetFilters }) => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const paginatedData = materialsContent.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const renderContent = content => {
    return content.map((con, index) => (
      <div className="result" key={index}>
        <h4 className="h4-style">{con.node.title}</h4>
        <div className="up-text">
          <p className="p-style">{t`materials-content.inci`}</p>
          <span className="p-style">{con.node.inci}</span>
        </div>
        <div className="down-text">
          <p className="p-style">{t`materials-content.cas`}</p>
          <span className="p-style">{con.node.cas}</span>
        </div>
        <div className="categories">
          {con.node.category.map((cat, index) => (
            <div key={index}>
              {cat === "Chemia gospodarcza" && (
                <div className="category hc-background">
                  <p className="p-style ">{t`materials-filter.household-chemicals`}</p>
                </div>
              )}
              {cat === "Kosmetyka" && (
                <div className="category cos-background">
                  <p className="p-style ">{t`materials-filter.cosmetology`}</p>
                </div>
              )}
              {cat === "Farmacja" && (
                <div className="category far-background">
                  <p className="p-style ">{t`materials-filter.pharmacy`}</p>
                </div>
              )}
              {cat === "Żywność i suplementy diety" && (
                <div className="category food-background">
                  <p className="p-style ">{t`materials-filter.food`}</p>
                </div>
              )}
              {cat === "Pozostałe branże" && (
                <div className="category oi-background">
                  <p className="p-style ">{t`materials-filter.other-industries`}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="p-style details">{t`materials-content.details`}</p>
      </div>
    ))
  }

  return (
    <>
      <div className="materials-c-container">
        <div className="container">
          {materialsContent && materialsContent.length > 0 ? (
            <>
              <div className="content-con">
                <div className="results-con">
                  {renderContent(materialsContent)}
                </div>
              </div>
              <CustomPagination
                itemsCount={materialsContent.length}
                itemsPerPage={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                alwaysShown={true}
              />
            </>
          ) : (
            <div className="empty-content-con">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M35 35L26.3333 26.3333M29.2222 19.1111C29.2222 20.4389 28.9607 21.7537 28.4526 22.9805C27.9444 24.2072 27.1996 25.3218 26.2607 26.2607C25.3218 27.1996 24.2072 27.9444 22.9805 28.4526C21.7537 28.9607 20.4389 29.2222 19.1111 29.2222C17.7833 29.2222 16.4685 28.9607 15.2418 28.4526C14.015 27.9444 12.9004 27.1996 11.9615 26.2607C11.0226 25.3218 10.2778 24.2072 9.76966 22.9805C9.26153 21.7537 9 20.4389 9 19.1111C9 16.4295 10.0653 13.8577 11.9615 11.9615C13.8577 10.0653 16.4295 9 19.1111 9C21.7927 9 24.3645 10.0653 26.2607 11.9615C28.1569 13.8577 29.2222 16.4295 29.2222 19.1111Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="h3-style">{t`materials-content.title`}</h3>
              <p className="p-style">{t`materials-content.description`}</p>
              <p
                onClick={resetFilters}
                className="clear-filter-p"
              >{t`materials-filter.clean-filters`}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MaterialsContent
