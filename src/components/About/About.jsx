import React from "react"
import WhyPraty from "./WhyPraty"
import './About.scss'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
              <WhyPraty/>
          </div>
          <div className="col-4">
            <h4>Fiind out</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium consequatur expedita dolores blanditiis architecto
              enim repellat delectus reiciendis iusto dolor!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
