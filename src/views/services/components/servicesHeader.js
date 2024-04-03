import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/servicesHeader.css"

const ServicesHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="services-h-container">
        <div className="container">
          <h1 className="h1-style">{t`services-header.title`}</h1>
          <p className="p-style">{t`services-header.description`}</p>
        </div>
      </div>
    </>
  )
}

export default ServicesHeader
