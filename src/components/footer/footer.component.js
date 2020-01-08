import React from "react"
import PropTypes from "prop-types"

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={ styles.root }>
    <p>Brava Labs 2019.</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
