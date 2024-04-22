import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/newsContent.css"
import CustomPagination from "../../../components/pagination/pagination"
import ArticleTile from "../../../components/articleTile/articleTile"

const NewsContent = ({ newsContent }) => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const paginatedData = newsContent.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const renderArticles = value => {
    return value.map((val, index) => (
      <ArticleTile key={index} article={val} t={t} />
    ))
  }

  return (
    <>
      <div className="news-c-container">
        <div className="container">
          {newsContent && (
            <>
              <div className="content-con">
                <div className="results-con">
                  {renderArticles(paginatedData)}
                </div>
              </div>
              <CustomPagination
                itemsCount={newsContent.length}
                itemsPerPage={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                alwaysShown={true}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default NewsContent
