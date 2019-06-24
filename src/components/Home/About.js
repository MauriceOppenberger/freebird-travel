import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import img from "../../images/defaultBcg.jpeg"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="company image" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="landscape" />
          </div>
        </article>
        <article className={styles.aboutinfo}>
          <h4>explor the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
            quam necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla
            quam necessitatibus.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
