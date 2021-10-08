import React from "react"
import WhyPraty from "./WhyPraty"
import './About.scss'
import ContactInfo from "./ContactInfo"


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
              <WhyPraty/>
          </div>
          <div className="col-4">
            <ContactInfo/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
