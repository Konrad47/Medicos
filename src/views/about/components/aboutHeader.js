import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/aboutHeader.css"

const AboutHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="about-h-container">
        <div className="container">
          <h1 className="h1-style">{t`about-header.title`}</h1>
        </div>
      </div>
    </>
  )
}

export default AboutHeader
