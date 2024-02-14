import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="container">
        <h1>{t`home.title`}</h1>
      </div>
    </>
  )
}
export default Home
