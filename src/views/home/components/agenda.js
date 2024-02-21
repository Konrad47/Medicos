import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/agenda.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"

const Agenda = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const dayOneButton = (
    <div className="agenda-day-chooser">
      <h4 className="h4-style">{t`agenda.title-day1`}</h4>
      <p className="p-style">{t`agenda.description-day1`}</p>
    </div>
  )
  const dayTwoButton = (
    <div className="agenda-day-chooser">
      <h4 className="h4-style">{t`agenda.title-day2`}</h4>
      <p className="p-style">{t`agenda.description-day2`}</p>
    </div>
  )

  return (
    <>
      <div className="a-container">
        <div className="container">
          <h2 className="h2-style">{t`agenda.title`}</h2>
          <h4 className="h4-style">{t`agenda.title2`}</h4>
          <Carousel
            prevIcon={dayOneButton}
            nextIcon={dayTwoButton}
            interval={null}
            indicators={false}
          >
            <Carousel.Item>
              <div className="event-agenda-container">
                <div className="time-con">
                  <p>08:00 - 10:00</p>
                  <p>2h 0m</p>
                </div>
                <div className="right-con">
                  <div className="description-con">
                    <h5>
                      The Art of Public Speaking and Effective Communication
                    </h5>
                    <p>
                      The program provides an overview of the core GRC modules
                      in ServiceNow - Policy and Compliance, Risk, This course
                      consists of hands-on labs that provide a holistic
                      experience of optimally configuring SA
                    </p>
                  </div>
                  <div className="speaker-con">
                    <div className="speaker-desc-con">
                      <p>Albert Flores</p>
                      <p>General Electric</p>
                    </div>
                    <StaticImage
                      className="o-image"
                      src="../../../images/organizers/profile-pic.png"
                      alt="Beta ETF"
                      placeholder="none"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="event-agenda-container">
                <div className="time-con">
                  <p className="p-time">08:00 - 10:00</p>
                  <p className="p-duration">2h 0m</p>
                </div>
                <div className="right-con">
                  <div className="description-con">
                    <h5 className="h5-style">
                      The Art of Public Speaking and Effective Communication
                    </h5>
                    <p className="p-style">
                      The program provides an overview of the core GRC modules
                      in ServiceNow - Policy and Compliance, Risk, This course
                      consists of hands-on labs that provide a holistic
                      experience of optimally configuring SA
                    </p>
                  </div>
                  <div className="speaker-con">
                    <div className="speaker-desc-con">
                      <p className="p-speaker-name">Albert Flores</p>
                      <p className="p-speaker-desc">General Electric</p>
                    </div>
                    <div className="a-image-container">
                      <StaticImage
                        className="a-speaker-image"
                        src="../../../images/profile-pic.png"
                        alt="Beta ETF"
                        placeholder="none"
                        loading="lazy"
                      />
                      <div className="a-speaker-image-border"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Agenda
