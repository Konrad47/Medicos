import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/discover-potential.css"
import { StaticImage } from "gatsby-plugin-image"

const DiscoverPotential = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="dp-container">
        <div className="container">
          <div className="dp-con">
            <div className="dp-text">
              <h2 className="h2-style">{t`discover-potential.title`}</h2>
              <p className="p-style">{t`discover-potential.p`}</p>
              <p className="p-style">{t`discover-potential.p2`}</p>
            </div>
            <StaticImage
              className="dp-image"
              src="../../../images/dp/dp-image.png"
              alt="Top image"
              placeholder="Top image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscoverPotential
