import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/partners.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Partners = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="p-container">
        <div className="container">
          <div className="main-partners-con">
            <h3>{t`partners.main-partners`}</h3>
            <div className="main-partners">
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="support-content-partners-con">
            <div className="support-partners">
              <h3>{t`partners.support-partners`}</h3>
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
            </div>
            <div className="content-partners">
              <h3>{t`partners.content-partners`}</h3>
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="main-partners-con">
            <h3>{t`partners.media-partners`}</h3>
            <div className="media-partners">
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners
