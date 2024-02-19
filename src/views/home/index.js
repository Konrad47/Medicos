import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/menu/menu"
import WpiConference from "./components/wpi-conference"
import Organizers from "./components/organizers"
import DiscoverPotential from "./components/discover-potential"
import Numbers from "./components/numbers"
import Speakers from "./components/speakers"
import Agenda from "./components/agenda"
const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menu />
      <WpiConference />
      <Organizers />
      <DiscoverPotential />
      <Numbers />
      <Speakers />
      <Agenda />
    </>
  )
}
export default Home
