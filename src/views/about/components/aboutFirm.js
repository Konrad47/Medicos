import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/aboutFirm.css"
import { StaticImage } from "gatsby-plugin-image"

const AboutFirm = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="about-f-container">
        <div className="container">
          <div className="about-grid">
            <div className="text-con">
              <h2 className="h2-style">{t`about-firm.title`}</h2>
              <p className="p-style">{t`about-firm.description-1`}</p>
              <p className="p-style">{t`about-firm.description-2`}</p>
              <div className="images">
                <StaticImage
                  className="image"
                  src="../../../images/about/pspkd.png"
                  alt="PSPKD"
                  placeholder="PSPKD"
                  loading="lazy"
                />
                <StaticImage
                  className="image"
                  src="../../../images/about/ptck.png"
                  alt="PTCK"
                  placeholder="PTCK"
                  loading="lazy"
                />
                <StaticImage
                  className="image"
                  src="../../../images/about/ifscc.png"
                  alt="IFSCC"
                  placeholder="IFSCC"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="image-con">
              <StaticImage
                className="right-image"
                src="../../../images/about/right-image.png"
                alt="Right image"
                placeholder="Right image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutFirm
