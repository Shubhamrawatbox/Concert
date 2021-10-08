import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Concerts from "./Concerts"

const FeaturedConcerts = () => {
  const Featuredata = useStaticQuery(graphql`
    query {
      allContentfulConcertFeatures(sort: { fields: month }) {
        nodes {
          name
          month
          slug
          day
          description
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)
  const concert = Featuredata.allContentfulConcertFeatures.nodes
  const featureconcert = concert.map(concerts => {
    const Details = {
      name: concerts.name,
      description: concerts.description,
      day: concerts.day,
      month: concerts.month,
      image: concerts.image.file.url,
      slug: concerts.slug,
    }
    return (
      <div className="col-md-4" key={concerts.slug}>
        <Link to={`/Concert/${concerts.slug}`}>
          <Concerts concertDetail={Details} />
        </Link>
      </div>
    )
  })
  return (
    <div className="Featutred-concerts">
      <div className="container">
        <h3>Featured</h3>
        <div className="row">{featureconcert}</div>
      </div>
    </div>
  )
}

export default FeaturedConcerts
