import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  const option = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className>
            <h3>this is great image</h3>
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
            <p>images is there</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is another post: {title["en-US"]}</h1>
            <img width="400" src={image["en-US"].fields.file["en-US"].url} />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, option)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, Y")
      text {
        json
      }
    }
  }
`
export default Blog
