import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/menu/menu"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menu />
      <div className="container">
        <h1>{t`home.title`}</h1>
      </div>
    </>
  )
}
export default Home
