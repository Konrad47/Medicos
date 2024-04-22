import React, { useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/homeHeader.css"
import QueryNavigate from "../../../hooks/queryNavigate"

const HomeHeader = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const goToContact = () => {
    QueryNavigate("Chcę zapytać o dostępność surowca", "contact", language)
  }

  return (
    <>
      <div className="home-h-container">
        <div className="container">
          <div className="h-con">
            <div className="left-con">
              <h1 className="h1-style">
                {t`home-header.title-a`} <span>{t`home-header.title-b`}</span>
              </h1>
              <p className="p-style">{t`home-header.description`}</p>
              <button
                onClick={() => goToContact()}
                className="register-btn header-button"
              >{t`home-header.ask`}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeader
