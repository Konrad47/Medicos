import React from "react"
import Menu from "../../components/menu/menu"
import WpiConference from "./components/wpi-conference"
import Organizers from "./components/organizers"
import DiscoverPotential from "./components/discover-potential"
import Numbers from "./components/numbers"
import Speakers from "./components/speakers"
import Agenda from "./components/agenda"
import Register from "./components/register"
import Partners from "./components/partners"
import PreviousEditions from "./components/previous-editions"
import Register2 from "./components/register2"
import Footer from "../../components/footer/footer"

const Home = () => {
  return (
    <>
      <Menu />
      <WpiConference />
      <Organizers />
      <div id="conference">
        <DiscoverPotential />
      </div>
      <Numbers />
      <div id="speakers">
        <Speakers />
      </div>
      <div id="agenda">
        <Agenda />
      </div>
      <Register />
      <div id="partners">
        <Partners />
      </div>
      <div id="previous-editions">
        <PreviousEditions />
      </div>
      <Register2 />
      <Footer />
    </>
  )
}
export default Home
