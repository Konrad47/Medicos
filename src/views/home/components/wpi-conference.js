import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/wpi-conference.css"

const WpiConference = () => {
  const { t } = useTranslation()

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-06-01") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 10000)

    return () => clearTimeout(timer)
  })

  const { days, hours, minutes } = timeLeft

  return (
    <>
      <div className="wpic-container">
        <div className="container">
          <div className="wpic-titles-container">
            <h4 className="h4-style">
              <svg
                className="wpic-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <g opacity="0.7" clip-path="url(#clip0_25_617)">
                  <path
                    d="M5.8335 9.33329C5.8335 8.62605 6.11445 7.94777 6.61454 7.44767C7.11464 6.94758 7.79292 6.66663 8.50016 6.66663H24.5002C25.2074 6.66663 25.8857 6.94758 26.3858 7.44767C26.8859 7.94777 27.1668 8.62605 27.1668 9.33329V25.3333C27.1668 26.0405 26.8859 26.7188 26.3858 27.2189C25.8857 27.719 25.2074 28 24.5002 28H8.50016C7.79292 28 7.11464 27.719 6.61454 27.2189C6.11445 26.7188 5.8335 26.0405 5.8335 25.3333V9.33329Z"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.8335 4V9.33333"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.1665 4V9.33333"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.8335 14.6666H27.1668"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1665 20H16.4998"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 20V24"
                    stroke="#F7D4F3"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_617">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {t`wpi-conference.title`}
            </h4>
            <h4 className="h4-style">
              <svg
                className="wpic-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <g opacity="0.7" clip-path="url(#clip0_25_627)">
                  <path
                    d="M24.9854 4.18137C27.1885 6.38421 28.4485 9.35752 28.499 12.4726C28.5496 15.5877 27.3866 18.6003 25.2561 20.8734L24.9854 21.1534L19.3281 26.8094C18.6102 27.5267 17.6466 27.9444 16.6323 27.9779C15.618 28.0113 14.6289 27.6579 13.8654 26.9894L13.6734 26.8094L8.01474 21.152C5.76429 18.9016 4.5 15.8493 4.5 12.6667C4.5 9.48408 5.76429 6.43182 8.01474 4.18137C10.2652 1.93092 13.3175 0.666626 16.5001 0.666626C19.6827 0.666626 22.735 1.93092 24.9854 4.18137ZM16.5001 8.6667C15.9748 8.6667 15.4546 8.77016 14.9693 8.97118C14.484 9.1722 14.0431 9.46684 13.6716 9.83827C13.3002 10.2097 13.0056 10.6507 12.8046 11.136C12.6035 11.6213 12.5001 12.1414 12.5001 12.6667C12.5001 13.192 12.6035 13.7121 12.8046 14.1974C13.0056 14.6827 13.3002 15.1237 13.6716 15.4951C14.0431 15.8666 14.484 16.1612 14.9693 16.3622C15.4546 16.5632 15.9748 16.6667 16.5001 16.6667C17.5609 16.6667 18.5784 16.2453 19.3285 15.4951C20.0786 14.745 20.5001 13.7276 20.5001 12.6667C20.5001 11.6058 20.0786 10.5884 19.3285 9.83827C18.5784 9.08813 17.5609 8.6667 16.5001 8.6667Z"
                    stroke="#F7D4F3"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_627">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {t`wpi-conference.title2`}
            </h4>
          </div>
          <h1 className="h1-style">{t`wpi-conference.title3`}</h1>
          <div className="wpic-time-container">
            <div>
              <div>
                <p className="p-time">{days}</p>
                <p className="p-time-desc">{t`wpi-conference.days`}</p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <p className="p-time">{hours}</p>
                  <p className="p-time-desc">{t`wpi-conference.hours`}</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <p className="p-time">{minutes}</p>
                  <p className="p-time-desc">{t`wpi-conference.minutes`}</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="register-btn wpic-btn ">{t`menu.register`}</a>
        </div>
      </div>
    </>
  )
}
export default WpiConference
