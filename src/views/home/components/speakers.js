import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/speakers.css"

const Speakers = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="s-container">
        <div className="container">
          <h2>{t`speakers.title`}</h2>
        </div>
      </div>
    </>
  )
}

export default Speakers
