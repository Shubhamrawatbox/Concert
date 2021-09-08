import React from "react"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai"
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col">
            All CopyRight ©️ {new Date().getFullYear()} Resvered By
            Concer-Party.
          </div>
          <div className="col">
            <ul className="social-links">
              <li>
                <a href="/" target="_blank">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
