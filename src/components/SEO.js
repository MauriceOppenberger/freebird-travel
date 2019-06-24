import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
        TwitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* {twitter card} */}
      <meta name="twitter:card" content="summery_large_image" />
      <mete name="twitter:creator" content={twitterUsername} />
      <meta name="witter:title" content={siteTitle} />
      <meta name="witter:description" content={siteDescription} />
      <meta name="witter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}
export default SEO
