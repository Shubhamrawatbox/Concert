
const path = require('path')
exports.createPages = async({ graphql, actions })=> {
  const concertDetailsTemplate = path.resolve(
    `./src/templates/Concertdetails.jsx`
  )

  //query slug for contentful
  const result = await graphql(`
    query Myresult {
      allContentfulConcertFeatures {
        nodes {
          slug
        }
      }
    }
  `)
  //create page for ecah node
  const nodes=result.data.allContentfulConcertFeatures.nodes;
  nodes.map((node)=>{
      node.url=`/Concert/${node.slug}`
      actions.createPage({
          path:node.url,
          component:concertDetailsTemplate,
          context:{slug: node.slug}
      })
  })
}
