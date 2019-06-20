import React from "react"
import Layout from "../components/Layout"
import styles from "../css/notfound.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

export default function notfound() {
  return <Layout>
    <header className={styles.notfound}>
      <Banner title="oops is's a dead end">
        <Link to="/" className="btn-white">
          back to home page
        </Link>
      </Banner>
    </header>

  </Layout>
}
