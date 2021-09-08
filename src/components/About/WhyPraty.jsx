import { useStaticQuery, graphql } from "gatsby"
import React from "react"
// import img from "../../images/img.jpg"

const WhyPraty = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `)
  return (
    <div className="why-Party">
      <h2>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h2>
      <div>{data.allMarkdownRemark.nodes[0].html}</div>
    </div>
  )
}

export default WhyPraty
