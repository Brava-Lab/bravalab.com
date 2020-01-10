import React from "react"

import Container from "./../container/container.component"
import Logo from "./../../images/brava-no-text.svg"

import styles from "./footer.module.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Brava lab logo" />
        <p className={styles.copyright}>
          Copyright Brava-Lab © {currentYear} | All Rights Reserved
        </p>
      </Container>
    </footer>
  )
}

export default Footer
