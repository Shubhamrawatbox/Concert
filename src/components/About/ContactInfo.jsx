import React from "react"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai"

const ContactInfo = () => {
  return (
    <div className="ConatctInfo">
      <h4>Find Out</h4>
      <div className="location">
        <h4>Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.755642949828!2d77.31450691442137!3d28.396447551478847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc4e967d4c21%3A0xcf7b46b8449d9d60!2sAjronda%2C%20Sector%2015A%2C%20Faridabad%2C%20Haryana%20121007!5e0!3m2!1sen!2sin!4v1631598255368!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: "0", marginTop: "1rem" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <ul>
          <li>Get Fligh From</li>
          <li>One Airpot Swaure</li>
        </ul>
      </div>
      <div className="phone">
        <h4>Phone</h4>
        <ul>
          <li>+001-228-774</li>
          <li>+100-550-999</li>
        </ul>
      </div>
      <div className="social">
        <h4>Social</h4>
        <ul>
          <li>
            <a href="/">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillTwitterSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo
