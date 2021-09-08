import React from "react"
import one from '../../images/one.jpg'
import two from '../../images/two.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="Hero-section">
      <Carousel className="cursol" controls={false}  fade interval={5000}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={one}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={two}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero
