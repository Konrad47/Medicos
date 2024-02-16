import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/speakers.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import "../../../images/profile-pic.png"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Speakers = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* <GatsbyImage
                      image={getImage()}
                    /> */}
      <div className="s-container">
        <div className="container">
          <h2>{t`speakers.title`}</h2>
          <Carousel>
            <Carousel.Item interval={60000}>
              <div className="speakers-container">
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
                <div className="speaker">
                  <StaticImage
                    className="o-image"
                    src="../../../images/organizers/o-beta-etf.png"
                    alt="Beta ETF"
                    placeholder="none"
                    loading="lazy"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={60000}>
              <h1>2</h1>
            </Carousel.Item>
            <Carousel.Item interval={60000}>
              <h1>3</h1>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Speakers
