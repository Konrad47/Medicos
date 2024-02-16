import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/menu/menu"
import WpiConference from "./components/wpi-conference"
import Organizers from "./components/organizers"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menu />
      <WpiConference />
      <Organizers />
    </>
  )
}
export default Home
