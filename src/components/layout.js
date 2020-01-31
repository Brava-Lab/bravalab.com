import React from "react"
import PropTypes from "prop-types"

import Footer from "../components/footer/footer.component"
import Navbar from "../components/navbar/navbar.component"

const Layout = ({ children, noNavbar }) => (
  <>
    { noNavbar ? null : <Navbar /> }

    <main>{ children }</main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
