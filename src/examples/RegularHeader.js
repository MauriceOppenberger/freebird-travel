import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return <div></div>
      }}
    />
  )
}

export default RegularHeader
