import React from "react"
import MainNavbar from "../Navbar/Navbar"

import '../../styles/Main.scss'
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return <div className="layout">
      <MainNavbar/>
      {children}
      <Footer/>
      </div>
}

export default Layout
