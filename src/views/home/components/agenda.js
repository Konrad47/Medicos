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
    }
    getDays()
  }, [data.allContentfulAgenda, language])

  const dayOneButton = (
    <div onClick={() => disableButton()} className="agenda-day-chooser">
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

  const disableButton = () => {
    const carouselControlPrev = document.querySelector(
      ".a-container .carousel-control-prev"
    )
    carouselControlPrev.style.pointerEvents = "none"
    console.log(carouselControlPrev.style)
  }

  const renderDay1 = day1?.map(agenda => (
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
            <p className="p-speaker-name">{agenda.node.speakerName}</p>
            <p className="p-speaker-desc">{agenda.node.speakerRole}</p>
          </div>
          <div className="a-image-container">
            <GatsbyImage
              className="a-speaker-image"
              image={getImage(agenda.node?.speakerImage?.gatsbyImageData)}
            />
            <div className="a-speaker-image-border"></div>
          </div>
        </div>
      </div>
    </div>
  ))

  const renderDay2 = day2?.map(agenda => (
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
            <p className="p-speaker-name">{agenda.node.speakerName}</p>
            <p className="p-speaker-desc">{agenda.node.speakerRole}</p>
          </div>
          <div className="a-image-container">
            <GatsbyImage
              className="a-speaker-image"
              image={getImage(agenda.node?.speakerImage?.gatsbyImageData)}
            />
            <div className="a-speaker-image-border"></div>
          </div>
        </div>
      </div>
    </div>
  ))

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
            // wrap={false}
          >
            <Carousel.Item>{day1 && renderDay1}</Carousel.Item>
            <Carousel.Item>{day2 && renderDay2}</Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Agenda
