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
          <p className="p-style">{t`materials-header.description`}</p>
        </div>
      </div>
    </>
  )
}

export default MaterialsHeader
