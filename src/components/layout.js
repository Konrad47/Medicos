import * as React from "react"
import Menu from "./menu/menu"
import Footer from "./footer/footer"
import CookieBar from "./cookies-bar/cookieBar"
import { useLayoutEffect } from "react"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    console.log(location)
  }, [location.pathname])

  return (
    <>
      <Menu />
      <main>{children}</main>
      <CookieBar />
      <Footer />
    </>
  )
}

export default Layout
