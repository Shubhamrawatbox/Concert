import { useStaticQuery, graphql } from "gatsby"
import React from "react"


const WhyPraty = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    markdownRemark {
      frontmatter {
        title
      }
      html
    }
  }
  `)
  return (
    <div className="why-Party">
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
    </div>
  )
}

export default WhyPraty
