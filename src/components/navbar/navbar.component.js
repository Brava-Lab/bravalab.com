import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Container from "./../container/container.component"
import Logo from "./../../images/brava-text-landscape.svg"
import LogoWithoutText from "./../../images/brava-no-text.svg"

import styles from "./navbar.module.scss"
import { useWindowSize } from "../../hooks/hooks"
import { BREAKPOINTS } from "../../theme/theme.constants"
import BurgerMenu from "../burger-menu/burger-menu.component"

const Navbar = () => {
  const { width } = useWindowSize();

  const logo = width > BREAKPOINTS['md'] ? Logo : LogoWithoutText;

  const menu = width > BREAKPOINTS['sm'] ? (
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
  ) : (
    <BurgerMenu/>
  )

  return (
    <nav className={ styles.root }>
      <Container className={ styles.container }>
        <h1 className={ styles.logo }>
          <Link to="/">
            <img className={ styles.logo } src={ logo } alt="Brava Labs logo" />
          </Link>
        </h1>
        { menu }
      </Container>
    </nav>
  )

}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
