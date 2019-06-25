import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/Blog/BlogCard"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Post = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const nextPage = `/posts/${currentPage + 1}`
  const prevPage =
    currentPage - 1 === 1 ? `/posts/` : `/posts/${currentPage - 1}`
  return (
    <Layout>
      <SEO title="Posts" />
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                key={i}
                fade
                to={`/posts/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, Y")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Post
