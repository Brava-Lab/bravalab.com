import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from './navbar.module.scss';

const Navbar = () => (
  <nav className={ styles.root }>
      <h1 className={ styles.logo }>
        <Link to="/">Brava Labs.</Link>
      </h1>
      <ul className={ styles.list }>
        <li className={ styles.item }><Link to="/about">About</Link></li>
        <li className={ styles.item }><Link to="/team">Team</Link></li>
        <li className={ styles.item }><Link to="/contact">Contact</Link></li>
      </ul>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
