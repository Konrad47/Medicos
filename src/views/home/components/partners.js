import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/partners.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"

const Partners = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulGpwPartner {
        edges {
          node {
            title
            category
            image {
              gatsbyImageData(width: 180, height: 100, quality: 100)
            }
            node_locale
          }
        }
      }
    }
  `)

  const [mainPartners, setMainPartners] = useState()
  const [supportPartners, setSupportPartners] = useState()
  const [contentPartners, setContentPartners] = useState()
  const [partners, setPartners] = useState()
  const [mediaPartners, setMediaPartners] = useState()

  useEffect(() => {
    const getPartners = () => {
      const getPartners = getCurrentTranslations(
        data.allContentfulGpwPartner.edges,
        language
      )

      setMainPartners(
        getPartners.filter(partner => partner.node.category === "main-partner")
      )
      setSupportPartners(
        getPartners.filter(
          partner => partner.node.category === "support-partner"
        )
      )

      setContentPartners(
        getPartners.filter(
          partner => partner.node.category === "content-partner"
        )
      )

      setPartners(
        getPartners.filter(partner => partner.node.category === "partner")
      )

      setMediaPartners(
        getPartners.filter(partner => partner.node.category === "media-partner")
      )
    }
    getPartners()
  }, [data.allContentfulGpwPartner, language])

  const renderPartners = items => {
    return items?.map(item => (
      <GatsbyImage
        alt={item.node.title}
        placeholder={item.node.title}
        className="partner-image"
        image={getImage(item.node.image.gatsbyImageData)}
      />
    ))
  }

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
          {mainPartners && mainPartners.length > 0 && (
            <div className="main-partners-con">
              <h3 className="h3-style">{t`partners.main-partners`}</h3>
              <div className="main-partners">
                {renderPartners(mainPartners)}
              </div>
            </div>
          )}
          {supportPartners && supportPartners.length > 0 && (
            <div className="support-partners-con">
              <h3 className="h3-style">{t`partners.support-partners`}</h3>
              <div className="support-partners">
                {renderPartners(supportPartners)}
              </div>
            </div>
          )}
          {partners &&
          partners.length > 0 &&
          contentPartners &&
          contentPartners.length > 0 ? (
            <div className="partners-content-partners-con">
              <div className="content-partners-con">
                <h3 className="h3-style">{t`partners.content-partners`}</h3>
                <div className="content-partners">
                  {renderPartners(contentPartners)}
                </div>
              </div>
              <div className="partners-con">
                <h3 className="h3-style">{t`partners.partners`}</h3>
                <div className="partners">{renderPartners(partners)}</div>
              </div>
            </div>
          ) : (
            <>
              {contentPartners && contentPartners.length > 0 && (
                <div className="content-partners-con margin48">
                  <h3 className="h3-style">{t`partners.content-partners`}</h3>
                  <div className="content-partners">
                    {renderPartners(contentPartners)}
                  </div>
                </div>
              )}
              {partners && partners.length > 0 && (
                <div className="partners-con margin48">
                  <h3 className="h3-style">{t`partners.partners`}</h3>
                  <div className="partners">{renderPartners(partners)}</div>
                </div>
              )}
            </>
          )}
          {mediaPartners && mediaPartners.length > 0 && (
            <div className="media-partners-con">
              <h3 className="h3-style">{t`partners.media-partners`}</h3>
              <div className="media-partners">
                {mediaPartners && renderPartners(mediaPartners)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Partners
