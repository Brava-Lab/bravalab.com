import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Container from "./../container/container.component"
import Logo from "./../../images/brava-text-landscape.svg"

import styles from "./navbar.module.scss"

const Navbar = () => (
  <nav className={styles.root}>
    <Container className={styles.container}>
      <h1 className={styles.logo}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Brava lab logo" />
        </Link>
      </h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.item}>
          <Link to="/services">Services</Link>
        </li>
        <li className={styles.item}>
          <Link to="/carrers">Carrers</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Container>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
