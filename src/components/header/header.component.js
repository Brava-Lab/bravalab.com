import React from "react"
import { default as cx } from "classnames"
import PropTypes from "prop-types"

import Container from "./../container/container.component"
import Button from "./../button/button.component"

import styles from "./header.module.scss"

const Header = ({ title, hasCallToAction, ...rest }) => (
  <header className={cx(styles.root, rest)}>
    <Container className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {hasCallToAction ? (
        <Button className={styles.button} to="/hire" text="Hire Bravalab" />
      ) : null}
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
