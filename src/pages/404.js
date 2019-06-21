import React from "react"
import Layout from "../components/Layout"
import styles from "../css/notfound.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

export default function notfound() {
  return (
    <Layout>
      <header className={styles.notfound}>
        <Banner title="oops is's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
