import React, { useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/materialsDontFind.css"
import QueryNavigate from "../../../hooks/queryNavigate"

const MaterialsDontFind = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const goToContact = () => {
    QueryNavigate("Chcę zapytać o dostępność surowca", "contact", language)
  }
  return (
    <>
      <div className="materials-df-container">
        <div className="container">
          <h2 className="h2-style">{t`materials-dont-find.title`}</h2>
          <p className="p-style">{t`materials-dont-find.description`}</p>
          <button
            onClick={goToContact}
            className="register-btn materials-dont-find-button"
            to="/contact"
          >{t`materials-dont-find.contact`}</button>
        </div>
      </div>
    </>
  )
}

export default MaterialsDontFind
