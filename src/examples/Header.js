import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const Header = () => {
  return <div></div>
}

export default Header
