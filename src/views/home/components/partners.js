import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/partners.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Partners = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="p-container">
        <StaticImage
          className="a-image-top"
          src="../../../images/partners/p-background-top.png"
          alt="Top image"
          placeholder="Top image"
          loading="lazy"
        />
        <div className="container">
          <h2 className="h2-style">{t`partners.title`}</h2>
          <div className="main-partners-con">
            <h3 className="h3-style">{t`partners.main-partners`}</h3>
            <div className="main-partners">
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
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
            <div className="support-partners-con">
              <h3 className="h3-style">{t`partners.support-partners`}</h3>
              <div className="support-partners">
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="content-partners-con">
              <h3 className="h3-style">{t`partners.content-partners`}</h3>
              <div className="content-partners">
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
                <StaticImage
                  className="partner-image"
                  src="../../../images/organizers/o-m-bank.png"
                  alt="Bottom image"
                  placeholder="Bottom image"
                  loading="lazy"
                />
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
          <div className="partners-con">
            <h3 className="h3-style">{t`partners.partners`}</h3>
            <div className="partners">
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="media-partners-con">
            <h3 className="h3-style">{t`partners.media-partners`}</h3>
            <div className="media-partners">
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
              <StaticImage
                className="partner-image"
                src="../../../images/organizers/o-m-bank.png"
                alt="Bottom image"
                placeholder="Bottom image"
                loading="lazy"
              />
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
