import * as React from "react"
import Menu from "./menu/menu"
import Footer from "./footer/footer"
import CookieBar from "./cookies-bar/cookieBar"

const Layout = ({ children }) => {
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
