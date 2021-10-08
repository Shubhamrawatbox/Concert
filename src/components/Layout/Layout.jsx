import React from "react"
import MainNavbar from "../Navbar/Navbar"

import '../../styles/Main.scss'
import Footer from "../Footer/Footer"

const Layout = ({ children, ...props}) => {
  return <div className="layout">
      <MainNavbar auth={props.auth}/>
      {children}
      <Footer/>
      </div>
}

export default Layout
