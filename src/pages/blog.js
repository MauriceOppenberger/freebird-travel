import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const blog = () => {
  return (
    <Layout>
      hello blog from blog page
      <Link to="/">back home</Link>
    </Layout>
  )
}

export default blog
