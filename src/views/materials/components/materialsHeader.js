import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/materialsHeader.css"

const MaterialsHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="materials-h-container">
        <div className="container">
          <h1 className="h1-style">{t`materials-header.title`}</h1>
          <h3 className="h3-style">{t`materials-header.description`}</h3>
        </div>
      </div>
    </>
  )
}

export default MaterialsHeader
