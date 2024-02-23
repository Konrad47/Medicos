import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/previous-editions.css"
import { StaticImage } from "gatsby-plugin-image"

const PreviousEditions = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="pe-container">
        <div className="container">
          <h2 className="h2-style">{t`previous-editions.title`}</h2>
          <h4 className="h4-style">{t`previous-editions.title2`}</h4>
          <div className="editions-con">
            <div className="edition">
              <StaticImage
                className="a-image-top"
                src="../../../images/previous-editions/pe-2023.png"
                alt="2023 edition"
                placeholder="2023 edition"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviousEditions
