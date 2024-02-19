import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/agenda.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"

const Agenda = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)

  const dayOneButton = (
    <div>
      <h4>{t`agenda.title-day1`}</h4>
      <p>{t`agenda.description-day1`}</p>
    </div>
  )
  const dayTwoButton = (
    <div>
      <h4>{t`agenda.title-day2`}</h4>
      <p>{t`agenda.description-day2`}</p>
    </div>
  )

  return (
    <>
      <div className="a-container">
        <div className="container">
          <h2 className="h2-style">{t`agenda.title`}</h2>
          <h4 className="h4-style">{t`agenda.title2`}</h4>
          <Carousel nextIcon={dayOneButton} prevIcon={dayTwoButton}></Carousel>
        </div>
      </div>
    </>
  )
}

export default Agenda
