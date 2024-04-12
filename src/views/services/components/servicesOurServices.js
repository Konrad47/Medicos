import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "../styles/servicesOurServices.css"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

const ServicesOurServices = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="services-os-container">
        <div className="container">
          <div className="services-con">
            <div onClick={() => navigate("/contact")} className="service">
              <StaticImage
                className="service-image"
                src="../../../images/services/our-services/service-image-1.png"
                alt="Service image"
                placeholder="Service image"
                loading="lazy"
              />
              <div className="right-text">
                <h3 className="h3-style">{t`services-our-services.title-1`}</h3>
                <p>{t`services-our-services.description-1`}</p>
                <Link
                  to="/contact"
                  className="bright-button"
                >{t`services-our-services.contact`}</Link>
              </div>
            </div>
            <div onClick={() => navigate("/contact")} className="service">
              <StaticImage
                className="service-image"
                src="../../../images/services/our-services/service-image-2.png"
                alt="Service image"
                placeholder="Service image"
                loading="lazy"
              />
              <div className="right-text">
                <h3 className="h3-style">{t`services-our-services.title-2`}</h3>
                <p>{t`services-our-services.description-2`}</p>
                <Link
                  to="/contact"
                  className="bright-button"
                >{t`services-our-services.contact`}</Link>
              </div>
            </div>
            <div onClick={() => navigate("/contact")} className="service">
              <StaticImage
                className="service-image"
                src="../../../images/services/our-services/service-image-3.png"
                alt="Service image"
                placeholder="Service image"
                loading="lazy"
              />
              <div className="right-text">
                <h3 className="h3-style">{t`services-our-services.title-3`}</h3>
                <p>{t`services-our-services.description-3`}</p>
                <Link
                  to="/contact"
                  className="bright-button"
                >{t`services-our-services.contact`}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesOurServices
