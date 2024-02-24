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
          <h4 className="h4-style h4-width ">{t`previous-editions.title2`}</h4>
          <div className="editions-con">
            <a target="_blank" className="edition" href="#">
              <div className="edition-image">
                <StaticImage
                  className="pe-image"
                  src="../../../images/previous-editions/pe-2023.png"
                  alt="2023 edition"
                  placeholder="2023 edition"
                  loading="lazy"
                />
                <div className="color-overlay"></div>
                <svg
                  className="pe-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                >
                  <circle opacity="0.6" cx="75" cy="75" r="75" fill="white" />
                  <path
                    opacity="0.6"
                    d="M113.5 68.4378C118.167 71.1321 118.167 77.8679 113.5 80.5622L60.25 111.306C55.5833 114 49.75 110.632 49.75 105.244L49.75 43.7561C49.75 38.3675 55.5833 34.9996 60.25 37.6939L113.5 68.4378Z"
                    fill="white"
                  />
                </svg>
                <div className="edition-image-hover">
                  <h5>
                    {t`previous-editions.see-wideo`} <span>↗</span>
                  </h5>
                </div>
              </div>
              <h4 className="h4-style">{t`previous-editions.edition2023`}</h4>
              <h5 className="phone-h5">
                {t`previous-editions.see-wideo`} <span>↗</span>
              </h5>
            </a>
            <a target="_blank" className="edition" href="#">
              <div className="edition-image">
                <StaticImage
                  className="pe-image"
                  src="../../../images/previous-editions/pe-2022.png"
                  alt="2023 edition"
                  placeholder="2023 edition"
                  loading="lazy"
                />
                <div className="color-overlay"></div>
                <svg
                  className="pe-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                >
                  <circle opacity="0.6" cx="75" cy="75" r="75" fill="white" />
                  <path
                    opacity="0.6"
                    d="M113.5 68.4378C118.167 71.1321 118.167 77.8679 113.5 80.5622L60.25 111.306C55.5833 114 49.75 110.632 49.75 105.244L49.75 43.7561C49.75 38.3675 55.5833 34.9996 60.25 37.6939L113.5 68.4378Z"
                    fill="white"
                  />
                </svg>
                <div className="edition-image-hover">
                  <h5>
                    {t`previous-editions.see-wideo`} <span>↗</span>
                  </h5>
                </div>
              </div>
              <h4 className="h4-style">{t`previous-editions.edition2022`}</h4>
              <h5 className="phone-h5">
                {t`previous-editions.see-wideo`} <span>↗</span>
              </h5>
            </a>
            <a target="_blank" className="edition" href="#">
              <div className="edition-image">
                <StaticImage
                  className="pe-image"
                  src="../../../images/previous-editions/pe-2021.png"
                  alt="2023 edition"
                  placeholder="2023 edition"
                  loading="lazy"
                />
                <div className="color-overlay"></div>
                <svg
                  className="pe-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                >
                  <circle opacity="0.6" cx="75" cy="75" r="75" fill="white" />
                  <path
                    opacity="0.6"
                    d="M113.5 68.4378C118.167 71.1321 118.167 77.8679 113.5 80.5622L60.25 111.306C55.5833 114 49.75 110.632 49.75 105.244L49.75 43.7561C49.75 38.3675 55.5833 34.9996 60.25 37.6939L113.5 68.4378Z"
                    fill="white"
                  />
                </svg>
                <div className="edition-image-hover">
                  <h5>
                    {t`previous-editions.see-wideo`} <span>↗</span>
                  </h5>
                </div>
              </div>
              <h4 className="h4-style">{t`previous-editions.edition2021`}</h4>
              <h5 className="phone-h5">
                {t`previous-editions.see-wideo`} <span>↗</span>
              </h5>
            </a>
            <a target="_blank" className="edition" href="#">
              <div className="edition-image">
                <StaticImage
                  className="pe-image"
                  src="../../../images/previous-editions/pe-2020.png"
                  alt="2023 edition"
                  placeholder="2023 edition"
                  loading="lazy"
                />
                <div className="color-overlay"></div>
                <svg
                  className="pe-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                >
                  <circle opacity="0.6" cx="75" cy="75" r="75" fill="white" />
                  <path
                    opacity="0.6"
                    d="M113.5 68.4378C118.167 71.1321 118.167 77.8679 113.5 80.5622L60.25 111.306C55.5833 114 49.75 110.632 49.75 105.244L49.75 43.7561C49.75 38.3675 55.5833 34.9996 60.25 37.6939L113.5 68.4378Z"
                    fill="white"
                  />
                </svg>
                <div className="edition-image-hover">
                  <h5>
                    {t`previous-editions.see-wideo`} <span>↗</span>
                  </h5>
                </div>
              </div>
              <h4 className="h4-style">{t`previous-editions.edition2020`}</h4>
              <h5 className="phone-h5">
                {t`previous-editions.see-wideo`} <span>↗</span>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviousEditions
