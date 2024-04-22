import React, { useEffect, useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "./styles/cookieBar.css"

const CookieTypes = [
  {
    name: "necessary",
    description: "extras.necessary",
  },
  {
    name: "preferences",
    description: "extras.preferences",
  },
  {
    name: "statistics",
    description: "extras.statistics",
  },
]

const CookieBar = () => {
  const { t } = useTranslation()
  const [editCookies, setEditCookies] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)

  const isRodoAccepted = () => {
    if (typeof document !== undefined) {
      const cookies = document.cookie.split(`; `)
      for (let cookie of cookies) {
        const item = cookie.split(`=`)
        const storedKey = item[0]
        const storedValue = item[1]
        if ("rodo_accepted" === storedKey) return storedValue
      }
    }
    return false
  }

  useEffect(() => {
    if (!isRodoAccepted()) setTimeout(() => setShouldShow(true), 700)
  }, [])

  const acceptAll = () => {
    document.cookie = "rodo_accepted=true;max-age=31536000;path=/"
    document.cookie = "optIn=all;max-age=31536000;path=/"
    setShouldShow(false)
  }

  const acceptSome = () => {
    document.cookie = "rodo_accepted=true;max-age=31536000;path=/"
    const analiticsCheckbox = document.getElementById("statistics")
    const preferencesCheckbox = document.getElementById("preferences")
    if (analiticsCheckbox.checked) {
      document.cookie = "optIn=all;max-age=31536000;path=/"
      setShouldShow(false)
      return
    } else if (preferencesCheckbox.checked) {
      document.cookie = "optIn=strict;max-age=31536000;path=/"
      setShouldShow(false)
      return
    }
    document.cookie = "optIn=strict;max-age=31536000;path=/"
    setShouldShow(false)
  }

  const declineAll = () => {
    document.cookie = "rodo_accepted=false;max-age=31536000;path=/"
    document.cookie = "optIn=none;max-age=31536000;path=/"
    setShouldShow(false)
  }

  if (!shouldShow) return null

  return (
    <>
      <div className="cookie-con">
        <div className="header-con">
          <p className="p-style p-head">{t`cookie-bar.header`}</p>
          <p className="p-style p-description">{t`cookie-bar.description`}</p>
        </div>
        {editCookies ? (
          <div className="agrees-con">
            {CookieTypes.map((type, index) => {
              return (
                <div key={index} className="agree-con">
                  <div className="check-con">
                    <input
                      checked={type.name === "necessary" ? true : null}
                      name={type.name}
                      id={type.name}
                      type="checkbox"
                    />
                    <label htmlFor={type.name}>
                      {t(String("cookie-bar." + type.name))}
                    </label>
                  </div>
                  <p className="p-style p-description">
                    {t(String("cookie-bar." + type.name + "-description"))}
                  </p>
                </div>
              )
            })}
          </div>
        ) : null}
        <div className="footer-con">
          <button
            className="bright-button decline"
            onClick={() => declineAll()}
          >
            {t("cookie-bar.decline")}
          </button>
          <button
            className="bright-button"
            onClick={
              !editCookies ? () => setEditCookies(true) : () => acceptSome()
            }
          >
            {editCookies ? t("cookie-bar.save") : t("cookie-bar.edit-cookies")}
          </button>
          <button
            id="accept-all"
            className="bright-button accept-all"
            onClick={() => acceptAll()}
          >
            {t("cookie-bar.accept-all")}
          </button>
        </div>
      </div>
    </>
  )
}

export default CookieBar
