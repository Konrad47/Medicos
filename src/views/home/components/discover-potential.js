import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/discover-potential.css"

const DiscoverPotential = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="dp-container">
        <div className="container">
          <div className="dp-text">
            <h2 className="h2-style">{t`discover-potential.title`}</h2>
            <p className="p-style">{t`discover-potential.p`}</p>
            <p className="p-style">{t`discover-potential.p2`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscoverPotential
