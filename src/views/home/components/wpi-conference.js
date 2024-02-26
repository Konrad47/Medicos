import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/wpi-conference.css"

const WpiConference = () => {
  const { t } = useTranslation()

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-23 09:30:00") - +new Date()
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
      <div className="wpic-container wpic-background-attachment">
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
                <g opacity="0.7" clip-path="url(#clip0_176_4177)">
                  <path
                    d="M24.9854 5.51474C27.1885 7.71758 28.4485 10.6909 28.499 13.806C28.5496 16.921 27.3866 19.9336 25.2561 22.2067L24.9854 22.4867L19.3281 28.1427C18.6102 28.8601 17.6466 29.2778 16.6323 29.3112C15.618 29.3447 14.6289 28.9913 13.8654 28.3227L13.6734 28.1427L8.01474 22.4854C5.76429 20.235 4.5 17.1827 4.5 14.0001C4.5 10.8175 5.76429 7.76519 8.01474 5.51474C10.2652 3.26429 13.3175 2 16.5001 2C19.6827 2 22.735 3.26429 24.9854 5.51474ZM16.5001 10.0001C15.9748 10.0001 15.4546 10.1035 14.9693 10.3046C14.484 10.5056 14.0431 10.8002 13.6716 11.1716C13.3002 11.5431 13.0056 11.984 12.8046 12.4693C12.6035 12.9546 12.5001 13.4748 12.5001 14.0001C12.5001 14.5254 12.6035 15.0455 12.8046 15.5308C13.0056 16.0161 13.3002 16.4571 13.6716 16.8285C14.0431 17.1999 14.484 17.4946 14.9693 17.6956C15.4546 17.8966 15.9748 18.0001 16.5001 18.0001C17.5609 18.0001 18.5784 17.5786 19.3285 16.8285C20.0786 16.0784 20.5001 15.0609 20.5001 14.0001C20.5001 12.9392 20.0786 11.9218 19.3285 11.1716C18.5784 10.4215 17.5609 10.0001 16.5001 10.0001Z"
                    stroke="#F7D4F3"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_176_4177">
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
          <a
            target="_blank"
            href={t`menu.register-link`}
            className="register-btn"
          >{t`menu.register`}</a>
        </div>
      </div>
    </>
  )
}
export default WpiConference
