import * as React from "react"
import Menu from "./menu/menu"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
