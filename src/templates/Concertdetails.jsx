import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"

const Concertdetails = ({ data }) => {
  const concertDetails = data.contentfulConcertFeatures
  return (
    <Layout>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <img src={concertDetails.image.file.url} alt=""  className="img-fluid"/>
              <hr />
              <p>Date: {concertDetails.day} {concertDetails.month}</p>
              <h4>{concertDetails.name}</h4>
              <p>
                {concertDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Concertdetails

export const concertDetails = graphql`
  query ($slug: String) {
    contentfulConcertFeatures(slug: { eq: $slug }) {
      name
      month
      description
      day
      image {
        file {
          url
        }
      }
    }
  }
`
