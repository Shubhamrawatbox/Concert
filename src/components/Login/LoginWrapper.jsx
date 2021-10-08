import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Forms from "./Form"
import './Login.scss'
import BackgroundImage from 'gatsby-background-image'

const LoginWrapper = () => {
  const bgdata=useStaticQuery(graphql`
  query gdquery {
    allFile(filter: {relativePath: {eq: "two.jpg"}}) {
      nodes {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1800){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)

  const bgImg=bgdata.allFile.nodes[0].childImageSharp.fluid

  return (
    <div className="login-wrapper">
      <div className="row">
        <div className="col-5">
          <div className="background-image">
            <BackgroundImage
            fluid={bgImg}
            style={{height:"100vh"}}
            >
              <div className="bg-text">
                <h1>Why We Live a Concert party!</h1>
                <br />
                <p>
                  Photo click by jordan willy.
                </p>
              </div>
            </BackgroundImage>
          </div>
        </div>
        <div className="col">
          <div className="login-form">
            <div className="login-area">
              <span className="nav-concert">Concert</span>
              <span className="nav-party">Party</span>
            </div>
            <div className="form-area">
              <h4 className="text-center mb-4">Hello Old Friend SignIn.</h4>
              <br />
              <Forms/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper
