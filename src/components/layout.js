import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/footer/footer.component"
import Navbar from "../components/navbar/navbar.component"

import styles from "./layout.module.scss"

import "../theme/_reset.scss"

const Layout = ({ children, noNavbar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="en" />
      </Helmet>

      { noNavbar ? null : <Navbar />}

      <main className={styles.root}>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
