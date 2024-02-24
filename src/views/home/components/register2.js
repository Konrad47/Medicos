import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/register2.css"

const Register2 = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="r2-container r2-background-attachment">
        <div className="container">
          <h2 className="h2-style">{t`register2.title`}</h2>
          <h4 className="h4-style">{t`register2.title2`}</h4>
          <a
            target="_blank"
            href="#"
            className="register-btn"
          >{t`menu.register`}</a>
        </div>
      </div>
    </>
  )
}

export default Register2
