import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/materialsDontFind.css"
import { navigate } from "gatsby"

const MaterialsDontFind = () => {
  const { t } = useTranslation()

  const goToContact = () => {
    const encodedSearchQuery = encodeURIComponent(
      "Chcę zapytać o dostępność surowca"
    )
    navigate(`/contact?query=${encodedSearchQuery}`)
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
