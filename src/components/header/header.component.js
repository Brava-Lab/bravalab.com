import React from "react"
import { default as cx } from "classnames"
import PropTypes from "prop-types"

import Container from "./../container/container.component"
import Button from "./../button/button.component"

import styles from "./header.module.scss"

const Header = ({ title, hasCallToAction, thin, image, ...rest }) => (
  <header className={cx(styles.root, {
    [styles.thin]: thin
  }, rest)}
    style={ {
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ image })`
  } }>
    <Container className={ styles.container }>
      <h2 className={ styles.title }>{ title }</h2>
      { hasCallToAction ? (
        <Button className={ styles.button } to="/hire" text="Hire Bravalab" />
      ) : null }
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
