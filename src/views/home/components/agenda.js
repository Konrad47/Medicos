import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/agenda.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"

const Agenda = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgenda(sort: { createdAt: ASC }) {
        edges {
          node {
            day
            description
            title
            panelDuration
            panelTime
            break
            speakerRole
            speakerName
            speakerImage {
              gatsbyImageData(
                width: 90
                height: 90
                cornerRadius: 90
                quality: 100
              )
            }
            node_locale
          }
        }
      }
    }
  `)

  const [day1, setDay1] = useState()
  const [day2, setDay2] = useState()

  const [isDay1, setIsDay1] = useState(true)
  const [isDay2, setIsDay2] = useState(false)

  useEffect(() => {
    const getDays = () => {
      const getDays = getCurrentTranslations(
        data.allContentfulAgenda.edges,
        language
      )
      const getDay1 = getDays.filter(day => day.node.day === true)
      const getDay2 = getDays.filter(day => day.node.day === false)
      setDay1(getDay1)
      setDay2(getDay2)

      const carouselControlPrev = document.querySelector(
        ".a-container .carousel-control-prev"
      )
      carouselControlPrev.style.pointerEvents = "none"
    }
    getDays()
  }, [data.allContentfulAgenda, language])

  const dayOneButton = (
    <div
      onClick={() => disableDay1()}
      className={
        isDay1 ? "agenda-day-chooser agenda-active-day " : "agenda-day-chooser"
      }
    >
      <h4 className="h4-style">{t`agenda.title-day1`}</h4>
      <p className="p-style">{t`agenda.description-day1`}</p>
    </div>
  )
  const dayTwoButton = (
    <div
      onClick={() => disableDay2()}
      className={
        isDay2 ? "agenda-day-chooser agenda-active-day " : "agenda-day-chooser"
      }
    >
      <h4 className="h4-style">{t`agenda.title-day2`}</h4>
      <p className="p-style">{t`agenda.description-day2`}</p>
    </div>
  )

  const disableDay1 = () => {
    const carouselControlPrev = document.querySelector(
      ".a-container .carousel-control-prev"
    )
    carouselControlPrev.style.pointerEvents = "none"
    setIsDay1(true)

    const carouselControlNext = document.querySelector(
      ".a-container .carousel-control-next"
    )
    carouselControlNext.style.pointerEvents = "all"
    setIsDay2(false)
  }

  const disableDay2 = () => {
    const carouselControlNext = document.querySelector(
      ".a-container .carousel-control-next"
    )
    carouselControlNext.style.pointerEvents = "none"
    setIsDay2(true)

    const carouselControlPrev = document.querySelector(
      ".a-container .carousel-control-prev"
    )
    carouselControlPrev.style.pointerEvents = "all"
    setIsDay1(false)
  }

  const renderDay = day => {
    return day?.map(agenda => (
      <div className="event-agenda-container">
        <div className="time-con">
          <p className="p-time">{agenda.node.panelTime}</p>
          <p className="p-duration">{agenda.node.panelDuration}</p>
        </div>
        <div className="right-con">
          <div className="description-con">
            <h5 className="h5-style">{agenda.node.title}</h5>
            <p className="p-style">{agenda.node.description}</p>
          </div>
          <div className="speaker-con">
            <div className="speaker-desc-con">
              {!agenda.node.break && (
                <>
                  <p className="p-speaker-name">{agenda.node.speakerName}</p>
                  <p className="p-speaker-desc">{agenda.node.speakerRole}</p>
                </>
              )}
            </div>
            <div className="a-image-container">
              {!agenda.node.break && agenda.node.speakerImage ? (
                <GatsbyImage
                  alt="Speaker"
                  placeholder="Speaker"
                  className="a-speaker-image"
                  image={getImage(agenda.node?.speakerImage?.gatsbyImageData)}
                />
              ) : (
                <svg
                  className="a-break-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2001_4079)">
                    <path
                      d="M16.0001 6C15.3671 6.45434 14.8542 7.05594 14.5058 7.75285C14.1573 8.44975 13.9838 9.22101 14.0001 10C13.9838 10.779 14.1573 11.5502 14.5058 12.2472C14.8542 12.9441 15.3671 13.5457 16.0001 14"
                      stroke="#961D8A"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.45459 26.1819H33.8182C33.8182 32.5723 34.3637 33.2728 30.5455 38.7273C23.4546 44.1819 13.091 43.6364 8.72732 37.6364C6.31396 33.78 5.49136 31.325 5.45459 26.1819Z"
                      fill="#961D8A"
                    />
                    <path
                      d="M24.0001 6C23.3671 6.45434 22.8542 7.05594 22.5058 7.75285C22.1573 8.44975 21.9838 9.22101 22.0001 10C21.9838 10.779 22.1573 11.5502 22.5058 12.2472C22.8542 12.9441 23.3671 13.5457 24.0001 14"
                      stroke="#961D8A"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 20H34V30C34 33.1826 32.7357 36.2348 30.4853 38.4853C28.2348 40.7357 25.1826 42 22 42H18C14.8174 42 11.7652 40.7357 9.51472 38.4853C7.26428 36.2348 6 33.1826 6 30V20Z"
                      stroke="#961D8A"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.4922 33.4519C34.3854 33.8619 35.3656 34.0463 36.3468 33.9887C37.3279 33.9312 38.2799 33.6335 39.119 33.1218C39.9581 32.6102 40.6587 31.9003 41.1592 31.0544C41.6597 30.2086 41.9447 29.2527 41.9893 28.2709C42.0338 27.2891 41.8365 26.3114 41.4146 25.4237C40.9928 24.5361 40.3594 23.7656 39.57 23.1801C38.7806 22.5945 37.8595 22.2119 36.8876 22.0657C35.9157 21.9196 34.9228 22.0144 33.9962 22.3419"
                      stroke="#961D8A"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2001_4079">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              <div className="a-speaker-image-border"></div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <>
      <div className="a-container">
        <StaticImage
          className="a-image-top"
          src="../../../images/agenda/a-background-top.png"
          alt="Top image"
          placeholder="Top image"
          loading="lazy"
        />
        <StaticImage
          className="a-image-bottom"
          src="../../../images/agenda/a-background-bottom.png"
          alt="Bottom image"
          placeholder="Bottom image"
          loading="lazy"
        />
        <div className="container">
          <h2 className="h2-style">{t`agenda.title`}</h2>
          <h4 className="h4-style">{t`agenda.title2`}</h4>
          <Carousel
            prevIcon={dayOneButton}
            nextIcon={dayTwoButton}
            interval={null}
            indicators={false}
          >
            <Carousel.Item>{day1 && renderDay(day1)}</Carousel.Item>
            <Carousel.Item>{day2 && renderDay(day2)}</Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Agenda
