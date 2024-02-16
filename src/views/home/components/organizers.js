import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/organizers.css"
import { StaticImage } from "gatsby-plugin-image"

const Organizers = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="o-container">
        <div className="container">
          <h3>{t`organizers.title`}</h3>
          <div className="o-grid">
            <StaticImage
              className="o-image"
              src="../../../images/organizers/o-beta-etf.png"
              alt="Beta ETF"
              placeholder="none"
              loading="lazy"
            />
            <StaticImage
              className="o-image"
              src="../../../images/organizers/o-m-bank.png"
              alt="mBank"
              placeholder="none"
              loading="lazy"
            />
            <StaticImage
              className="o-image"
              src="../../../images/organizers/o-gpw.png"
              alt="GPW"
              placeholder="none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Organizers
