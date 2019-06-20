import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <>
    <Layout>
      <Hero>
        <Banner
          title="make room for more"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto!"
        >
          <Link to="/tours" className="btn-white">
            explore more
          </Link>
        </Banner>
      </Hero>
      <About />
      <Services />
    </Layout>
  </>
)
