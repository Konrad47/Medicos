import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/materialsDontFind.css"

const MaterialsDontFind = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="materials-df-container">
        <div className="container">
          <h1 className="h1-style">{t`materials-dont-find.title`}</h1>
          <p className="p-style">{t`materials-dont-find.description`}</p>
          <Link
            className="register-btn materials-dont-find-button"
            to="/contact"
          >{t`materials-dont-find.contact`}</Link>
        </div>
      </div>
    </>
  )
}

export default MaterialsDontFind
