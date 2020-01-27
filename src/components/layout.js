import React from "react"
import PropTypes from "prop-types"

import Footer from "../components/footer/footer.component"
import Navbar from "../components/navbar/navbar.component"

import styles from "./layout.module.scss"

import "../theme/_reset.scss"

const Layout = ({ children, noNavbar }) => (
  <>
    { noNavbar ? null : <Navbar /> }

    <main className={ styles.root }>{ children }</main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
