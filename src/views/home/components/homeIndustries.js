import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/homeIndustries.css"

const HomeIndustries = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="home-i-container">
        <div className="container">
          <div className="i-con">
            <div className="up-con">
              <h2 className="h2-style">{t`home-industries.title`}</h2>
              <p className="p-style">{t`home-industries.description`}</p>
              <Link className="register-btn industry-button">{t`home-industries.all-materials`}</Link>
            </div>
            <div className="down-con">
              <div className="industry">
                <div className="industry-con">
                  <div className="h4-con">
                    <h4>{t`home-industries.household-chemicals`}</h4>
                  </div>
                  <p className="p-style">{t`home-industries.hc-description`}</p>
                  <Link className="register-btn industry-button">{t`home-industries.material`}</Link>
                </div>
              </div>
              <div className="industry">
                <div className="industry-con">
                  <div className="h4-con">
                    <h4>{t`home-industries.cosmetology`}</h4>
                  </div>
                  <p className="p-style">{t`home-industries.c-description`}</p>
                  <Link className="register-btn industry-button">{t`home-industries.material`}</Link>
                </div>
              </div>
              <div className="industry">
                <div className="industry-con">
                  <div className="h4-con">
                    <h4>{t`home-industries.pharmacy`}</h4>
                  </div>
                  <p className="p-style">{t`home-industries.p-description`}</p>
                  <Link className="register-btn industry-button">{t`home-industries.material`}</Link>
                </div>
              </div>
              <div className="industry">
                <div className="industry-con">
                  <div className="h4-con">
                    <h4>{t`home-industries.food`}</h4>
                  </div>
                  <p className="p-style">{t`home-industries.f-description`}</p>
                  <Link className="register-btn industry-button">{t`home-industries.material`}</Link>
                </div>
              </div>
              <div className="industry">
                <div className="industry-con">
                  <div className="h4-con">
                    <h4>{t`home-industries.other-industries`}</h4>
                  </div>
                  <p className="p-style">{t`home-industries.oi-description`}</p>
                  <Link className="register-btn industry-button">{t`home-industries.material`}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeIndustries
